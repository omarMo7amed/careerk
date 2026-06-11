"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { downloadCV } from "../api/downloadCV";
import { toast } from "react-hot-toast";

interface DownloadCVResponse {
  downloadUrl: string;
  expiresAt: string;
  expiresIn: number;
}

// Cache store with 59 minute expiration
const downloadUrlCache: {
  data: DownloadCVResponse | null;
  expiresAt: number;
} = {
  data: null,
  expiresAt: 0,
};

const CACHE_DURATION = 59 * 60 * 1000; // 59 minutes in milliseconds

export function useDownloadCV() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id: string): Promise<DownloadCVResponse> => {
      // Check if we have cached data that hasn't expired
      const now = Date.now();
      if (downloadUrlCache.data && downloadUrlCache.expiresAt > now) {
        return downloadUrlCache.data;
      }

      // Fetch new URL

      const data = await downloadCV(id);

      // Cache the result
      downloadUrlCache.data = data;
      downloadUrlCache.expiresAt = now + CACHE_DURATION;

      return data;
    },
    onSuccess: (data) => {
      // queryClient.setQueriesData(["cv-download-url"], (oldData) => {
      //   return oldData;
      // });
      window.open(data.downloadUrl, "_blank");
      toast.success("CV download URL retrieved successfully!");
    },
    onError: (error) => {
      toast.error("Error retrieving CV download URL: " + error.message);
    },
  });

  console.log("useDownloadCV - mutation state:", downloadUrlCache);

  console.log(
    "useDownloadCV - mutation state:",
    mutation.isPending,
    mutation.isIdle,
  );

  return {
    downloadUrl: downloadUrlCache.data?.downloadUrl ?? null,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    download: (id: string) => mutation.mutateAsync(id),
  };
}
