"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { withdrawApplication } from "../api/withdrawApplication";

export function useWithdrawApplication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (applicationId: string) => withdrawApplication(applicationId),
    onSuccess: (data, applicationId) => {
      queryClient.invalidateQueries({
        queryKey: ["applications", applicationId],
      });
    },
    onError: (error) => {
      console.error("Withdraw error:", error);
    },
  });
}
