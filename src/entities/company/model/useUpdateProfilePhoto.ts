"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadProfilePhoto } from "../api/uploadProfilePhoto";

export function useUpdateProfilePhoto() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess, isError, error, reset } = useMutation({
    mutationFn: (file: File) => uploadProfilePhoto(file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companyProfile"] });
    },
  });

  return {
    upload: mutate,
    isPending,
    isSuccess,
    isError,
    error: error instanceof Error ? error.message : null,
    reset,
  };
}
