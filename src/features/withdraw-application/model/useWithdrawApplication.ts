"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { withdrawApplication } from "../api/withdrawApplication";
import toast from "react-hot-toast";

export function useWithdrawApplication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (applicationId: string) => withdrawApplication(applicationId),
    onSuccess: (data, applicationId) => {
      if (data.success) {
        toast.success(data.message);

        queryClient.invalidateQueries({
          queryKey: ["applications"],
        });
        queryClient.invalidateQueries({
          queryKey: ["application", applicationId],
        });
      } else {
        toast.error(data.error.message);
      }
    },
    onError: (error) => {
      console.error("Withdraw error:", error);
      toast.error(error?.message || "Failed to withdraw application");
    },
  });
}
