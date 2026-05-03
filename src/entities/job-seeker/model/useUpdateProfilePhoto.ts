"use client";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadProfilePhoto } from "../api/uploadProfilePhoto";
import { jobSeekerKeys } from "../lib/queryKeys";
import { JobSeeker } from "../types/jobSeeker";

export function useUpdateProfilePhoto({ token }: { token: string }) {
  const queryClient = useQueryClient();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const {
    mutate,
    isPending,
    isSuccess,
    isError,
    error,
    reset: mutationReset,
  } = useMutation({
    mutationFn: (file: File) => uploadProfilePhoto(token, file),
    onSuccess: (data) => {
      queryClient.setQueryData(
        jobSeekerKeys.me.all,
        (old: { data: JobSeeker }) => {
          if (!old) return old;
          return {
            ...old,
            data: {
              ...old.data,
              ...data.data,
            },
          };
        },
      );
    },
    onError: () => {
      // Clear preview on error
      setPreviewUrl(null);
    },
  });

  const handleUpload = (file: File) => {
    // Create local preview immediately
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
      // Start upload after preview is set
      mutate(file);
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    mutationReset();
    setPreviewUrl(null);
  };

  return {
    upload: handleUpload,
    previewUrl,
    isPending,
    isSuccess,
    isError,
    error: error instanceof Error ? error.message : null,
    reset: handleReset,
  };
}
