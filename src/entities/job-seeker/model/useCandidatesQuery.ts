"use client";
import { useQuery } from "@tanstack/react-query";
import { allJobSeekers } from "../mock-data/allJobSeekers";
import { searchCandidates } from "../api/search";

export function useCandidatesQuery() {
  const queryKey = ["all-candidates"];
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: ({ signal }) => searchCandidates(signal, ""),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: true,
    placeholderData: allJobSeekers,
  });

  return {
    candidates: data ?? null,
    isLoading,
    error,
  };
}
