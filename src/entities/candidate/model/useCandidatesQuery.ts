"use client";
import { useQuery } from "@tanstack/react-query";
import { candidates } from "../mock-data/candidates";
import { searchCandidates } from "../api/search";

//i will add the functions later until amr give us endpoints

export function useCandidatesQuery() {
  const queryKey = ["candidates"];
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: ({ signal }) => searchCandidates(signal, ""),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: true,
    placeholderData: candidates,
  });

  return {
    candidates: data ?? null,
    isLoading,
    error,
  };
}
