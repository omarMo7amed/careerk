"use client";
import { useMutation } from "@tanstack/react-query";
import { downloadCV } from "../api/downloadCV";

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

export function useDownloadCV({ token }: { token: string }) {
  const mutation = useMutation({
    mutationFn: async (): Promise<DownloadCVResponse> => {
      // Check if we have cached data that hasn't expired
      const now = Date.now();
      if (downloadUrlCache.data && downloadUrlCache.expiresAt > now) {
        return downloadUrlCache.data;
      }

      // Fetch new URL
      const data = await downloadCV();

      // Cache the result
      downloadUrlCache.data = data;
      downloadUrlCache.expiresAt = now + CACHE_DURATION;

      return data;
    },
  });

  return {
    downloadUrl: mutation.data?.downloadUrl ?? null,
    isLoading: mutation.isPending,
    error: mutation.error,
    download: () => mutation.mutate(),
  };
}
