"use client";
import { useQuery } from "@tanstack/react-query";
import { Job } from "../types/BoomarkedJob";
import { getBookmarkedJobs } from "../api/getBookmarkedJobs";

type UseSavedJobsOptions = {
  page?: number;
  pageSize?: number;
};
export function useSavedJobs({
  page = 1,
  pageSize = 10,
}: UseSavedJobsOptions = {}) {
  const queryKey = ["bookmark", page, pageSize] as const;

  const { isPending, data, error } = useQuery<Job[], Error>({
    queryKey,
    queryFn: async ({ signal }) => {
      return getBookmarkedJobs({ signal, page, pageSize });
    },
    staleTime: 1000 * 60 * 5,
  });

  return {
    jobs: data ?? [],
    isLoading: isPending,
    error: error ?? null,
  };
}
