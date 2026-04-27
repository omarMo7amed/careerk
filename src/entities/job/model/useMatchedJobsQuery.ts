"use client";

import { useQuery } from "@tanstack/react-query";
import getMatchedJobs from "../api/getMatchedJobs";
import { GetJobsOptions, JobsResponse } from "../types/job";

export function useMatchedJobsQuery({
  page = 1,
  limit = 12,
  search,
  location,
  jobType,
  experienceLevel,
  workPreference,
  jobSource,
  enabled = false,
}: GetJobsOptions & { enabled?: boolean } = {}) {
  const queryKey = [
    "job-matches",
    page,
    limit,
    search ?? "",
    location ?? "",
    (jobType ?? []).join(","),
    (experienceLevel ?? []).join(","),
    (workPreference ?? []).join(","),
    (jobSource ?? []).join(","),
  ] as const;

  const { data, isLoading, isFetching, error } = useQuery<JobsResponse, Error>({
    queryKey,
    queryFn: ({ signal }) =>
      getMatchedJobs({
        signal,
        page,
        limit,
        search,
        location,
        jobType,
        token: "", // we will handle auth later
        experienceLevel,
        workPreference,
        jobSource,
      }),
    enabled,
    staleTime: 1000 * 60 * 5,
  });

  return {
    jobs: data?.data.jobs ?? null,
    total: data?.data.total ?? 0,
    page: data?.data.page ?? 1,
    limit: data?.data.limit ?? limit,
    totalPages: data?.data.totalPages ?? 1,
    isLoading: isLoading || isFetching,
    error: error ?? null,
  };
}
