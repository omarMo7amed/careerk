"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { requestImprovement } from "../api/requestImprovement";
import { getImprovements } from "@/entities/improvement";

export function useImprovementsQuery({ token }: { token: string }) {
  // Step 1: Query to fetch existing improvement report on mount
  const reportQuery = useQuery({
    queryKey: ["improvements", "latest"],
    queryFn: () => getImprovements(token),
    staleTime: 60 * 60 * 1000, // 60 minutes
    refetchOnWindowFocus: false,
  });

  // Step 2: Mutation to request a new improvement analysis (if doesn't exist or user wants to regenerate)
  const requestMutation = useMutation({
    mutationFn: () => requestImprovement(token),
    onError: (error) => {
      console.error("Improvement request failed:", error);
    },
    onSuccess: () => {
      // Refetch the report to generate a new Report
      reportQuery.refetch();
    },
  });

  return {
    requestImprovement: () => requestMutation.mutate(),
    isPending: requestMutation.isPending,
    isProcessing: reportQuery.isPending,
    isError: requestMutation.isError || reportQuery.isError,
    error: requestMutation.error || reportQuery.error,
    report: reportQuery.data?.data,
    reportExists: !!reportQuery.data?.data,
    regenerateReport: () => requestMutation.mutate(),
    reset: () => {
      requestMutation.reset();
      reportQuery.refetch();
    },
  };
}
