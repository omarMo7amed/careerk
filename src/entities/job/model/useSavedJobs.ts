"use client";
import { useQuery } from "@tanstack/react-query";
import { BookmarksResponse } from "../types/BoomarkedJob";
import { getBookmarkedJobs } from "../api/getBookmarkedJobs";

type UseSavedJobsOptions = {
  page?: number;
  limit?: number;
  search?: string;
  location?: string;
  jobType?: string[];
  jobSource?: string[];
};
export function useSavedJobs({
  page = 1,
  limit = 10,
  search,
  location,
  jobType,
  jobSource,
}: UseSavedJobsOptions = {}) {
  const queryKey = [
    "bookmark",
    page,
    limit,
    search,
    location,
    jobType,
    jobSource,
  ] as const;

  const { isPending, data, error } = useQuery<BookmarksResponse, Error>({
    queryKey,
    queryFn: async ({ signal }) => {
      return getBookmarkedJobs({
        signal,
        page,
        limit,
        search,
        location,
        jobType,
        jobSource,
      });
    },

    staleTime: 1000 * 60 * 5,
  });

  return {
    jobs: data?.data || [],
    isLoading: isPending,
    error: error ?? null,
  };
}
