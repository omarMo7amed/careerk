"use client";

import { useQuery } from "@tanstack/react-query";
// import { jobListings } from "../mock-data/jobs"; // this for testing
import getJobs from "../api/getJobs";
import { GetJobsOptions, JobsResponse } from "../types/job";

export function useJobsQuery({
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
    "jobs",
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
      getJobs({
        signal,
        page,
        limit,
        search,
        location,
        jobType,
        experienceLevel,
        workPreference,
        jobSource,
      }),
    enabled,
    staleTime: 1000 * 60 * 5,
    placeholderData: (previousData) => previousData,
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
