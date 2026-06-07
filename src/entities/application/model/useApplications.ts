"use client";

import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../api/getApplications";

interface UseApplicationsOptions {
  search?: string;
  location?: string;
  status?: string[];
  dateApplied?: string[];
  workPreference?: string[];
  page?: number;
  limit?: number;
}

export function useApplications({
  search,
  location,
  status,
  dateApplied,
  workPreference,
  page = 1,
  limit = 12,
}: UseApplicationsOptions = {}) {
  const { isPending, data, error } = useQuery({
    queryKey: [
      "applications",
      {
        search,
        location,
        status,
        dateApplied,
        workPreference,
        page,
        limit,
      },
    ],
    queryFn: ({ signal }) =>
      getApplications({
        signal,
        search,
        location,
        status,
        dateApplied,
        workPreference,
        page,
        limit,
      }),
    staleTime: 1000 * 60 * 5,
  });

  return {
    applications: data?.data.applications ?? [],
    total: data?.data.total ?? 0,
    page: data?.data.page ?? 1,
    totalPages: data?.data.totalPages ?? 1,
    isLoading: isPending,
    error: error ?? null,
  };
}
