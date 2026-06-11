"use client";
import { useMutation } from "@tanstack/react-query";
import { applyNow } from "../api/apply-now";
import { toast } from "react-hot-toast";

export function useApplyNow() {
  const { mutateAsync, isError, isPending, isSuccess } = useMutation({
    mutationFn: async (jobId: string) => applyNow(jobId),
    onSuccess: () => {
      toast.success("Application submitted successfully!");
    },
    onError: (error) => {
      toast.error(
        `Failed to submit application: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    },
  });

  return { applyNow: mutateAsync, isError, isPending, isSuccess };
}
