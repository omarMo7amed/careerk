"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getCompanyProfile } from "../api/getCompanyProfile";
import { CompanyProfileResponse } from "../types/CompanyProfile";

export function useCompanyProfileQuery() {
  const { isPending, data, error } = useQuery<CompanyProfileResponse, Error>({
    queryKey: ["companyProfile"],
    queryFn: getCompanyProfile,
    placeholderData: keepPreviousData,
  });

  return {
    company: data?.data || null,
    isLoading: isPending,
    error,
  };
}
