"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { requestImprovement } from "../api/requestImprovement";
import { getImprovements } from "@/entities/improvement";

export function useImprovementsQuery() {
  // Step 1: Query to fetch existing improvement report on mount
  const reportQuery = useQuery({
    queryKey: ["improvements", "latest"],
    queryFn: () => getImprovements(),
    staleTime: 60 * 60 * 1000, // 60 minutes
    refetchOnWindowFocus: false,
  });

  // Step 2: Mutation to request a new improvement analysis (if doesn't exist or user wants to regenerate)
  const requestMutation = useMutation({
    mutationFn: () => requestImprovement(),

    onSuccess: async () => {
      await reportQuery.refetch();
    },
  });

  const requestErrorMessage =
    requestMutation.error instanceof Error
      ? requestMutation.error.message
      : null;

  return {
    requestImprovement: () => requestMutation.mutateAsync(),
    isPending: requestMutation.isPending,
    isProcessing: reportQuery.isPending,
    isError: reportQuery.isError,
    error: reportQuery.error,
    requestErrorMessage,
    report: reportQuery.data?.data,
    reportExists: !!reportQuery.data?.data,
    regenerateReport: () => requestMutation.mutateAsync(),
    reset: () => {
      requestMutation.reset();
      reportQuery.refetch();
    },
  };
}
