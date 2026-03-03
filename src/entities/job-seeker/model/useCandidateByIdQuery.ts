"use client";
import { useQuery } from "@tanstack/react-query";
import { getJobSeekerById } from "../api/getJobSeekerById";

export function useCandidateByIdQuery(id: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["job-seeker", id],
    queryFn: () => getJobSeekerById(id),
    staleTime: 1000 * 60 * 5,
    enabled: Boolean(id),
  });

  return {
    jobSeeker: data ?? null,
    isLoading,
    error,
  };
}
