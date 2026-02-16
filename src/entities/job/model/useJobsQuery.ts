"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import getJobs from "../api/getJobs";
import { jobListings } from "../mock-data/jobs";
import { Job } from "../types/job";
import { searchJobs } from "../api/search";

type UseJobsQueryOptions = {
  page?: number;
  pageSize?: number;
  enabled?: boolean;
};

export function useJobsQuery({
  page = 1,
  pageSize = 20,
  enabled = true,
}: UseJobsQueryOptions = {}) {
  const queryClient = useQueryClient();
  const queryKey = ["jobs", page, pageSize] as const;

  const { data, isLoading, isFetching, error } = useQuery<Job[], Error>({
    queryKey,
    queryFn: ({ signal }) => searchJobs(signal, ""),
    enabled,
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: jobListings,
  });

  async function refetchNow() {
    try {
      return await queryClient.fetchQuery<Job[]>({
        queryKey,
        queryFn: ({ signal }) => searchJobs(signal, ""),
      });
    } catch {
      return null;
    }
  }

  return {
    jobs: data ?? null,
    isLoading: isLoading || isFetching,
    error: error ?? null,
    refetchNow,
  };
}
