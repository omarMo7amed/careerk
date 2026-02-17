"use client";

import { useQuery } from "@tanstack/react-query";

import { getCompanies } from "../api/getCompanies";
import { CompaniesListing } from "../mock-data/companies";
import { CompanyCard } from "../types/company";

type UseCompaniesQueryOptions = {
  page?: number;
  pageSize?: number;
};
export function useCompaniesQuery({
  page,
  pageSize,
}: UseCompaniesQueryOptions) {
  const queryKey = ["companies", page, pageSize] as const;
  const { isPending, data, error } = useQuery<CompanyCard[], Error>({
    queryKey,
    queryFn: async ({ signal }) => {
      return getCompanies({ signal, page, pageSize });
    },
    staleTime: 1000 * 60 * 5,
    placeholderData: CompaniesListing,
  });
  return {
    companies: data ?? undefined,
    isLoading: isPending,
    error: error ?? null,
  };
}
