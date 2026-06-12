"use client";

import { useQuery } from "@tanstack/react-query";

import { getCompanies } from "../api/getCompanies";

type UseCompaniesQueryOptions = {
  page?: number;
  pageSize?: number;
};

export function useCompaniesQuery({
  page,
  pageSize,
}: UseCompaniesQueryOptions) {
  const queryKey = ["companies", page, pageSize] as const;
  const { isPending, data, error } = useQuery({
    queryKey,
    queryFn: async ({ signal }) => {
      return getCompanies({ signal, page, pageSize });
    },
    staleTime: 1000 * 60 * 5,
  });

  const responseData = (data as { success?: boolean; data?: { companies?: unknown[]; totalPages?: number } }) ?? {};

  return {
    companies: (responseData.data?.companies ?? []) as any[],
    totalPages: responseData.data?.totalPages ?? 0,
    isLoading: isPending,
    error: error ?? null,
  };
}
