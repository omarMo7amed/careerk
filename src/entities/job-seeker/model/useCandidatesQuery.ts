"use client";
import { useQuery } from "@tanstack/react-query";
// import { allJobSeekers } from "../mock-data/allJobSeekers";
import { getCandidates } from "../api/getCandidates";
import { GetCandidatesOptions } from "../types/candidate";

export function useCandidatesQuery({
  limit = 12,
  search,
  location,
  page = 1,
  preferredJobTypes,
  availabilityStatus,
  workPreference,
  enabled = true,
}: GetCandidatesOptions) {
  const queryKey = [
    "candidates",
    page,
    limit,
    search ?? "",
    location ?? "",
    preferredJobTypes ?? [],
    availabilityStatus ?? [],
    workPreference ?? [],
  ] as const;
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: ({ signal }) =>
      getCandidates({
        signal,
        page,
        limit,
        search,
        location,
        preferredJobTypes,
        availabilityStatus,
        workPreference,
      }),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled,
  });

  return {
    candidates: data?.data.jobSeekers ?? null,
    page: data?.data.page ?? 1,
    totalPages: data?.data.totalPages ?? 0,
    error: error ?? null,
    isLoading,
  };
}
