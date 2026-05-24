"use client";
import { useQuery } from "@tanstack/react-query";
import { getCandidateById } from "../api/getCandidateById";

export function useCandidateByIdQuery(id: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["candidate", id],
    queryFn: () => getCandidateById(id),
    staleTime: 1000 * 60 * 5,
    enabled: Boolean(id),
  });

  return {
    jobSeeker: data ?? null,
    isLoading,
    error,
  };
}
