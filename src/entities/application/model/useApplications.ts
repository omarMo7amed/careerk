"use client";

import { useQuery } from "@tanstack/react-query";
import { ApplicationStatus } from "..";
import { getApplications } from "../api/getApplications";

interface UseApplicationsOptions {
  status?: ApplicationStatus;
  page?: number;
  limit?: number;
}

export function useApplications({
  status,
  page = 1,
  limit = 12,
}: UseApplicationsOptions = {}) {
  const { isPending, data, error } = useQuery({
    queryKey: ["applications", { status, page, limit }],
    queryFn: ({ signal }) => getApplications({ signal, status, page, limit }),
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
