"use client";

import { useQuery } from "@tanstack/react-query";
import { getCompanyProfile } from "../api/getCompanyProfile";
import { CompanyProfileResponse } from "../types/CompanyProfile";

export function useCompanyProfileQuery() {
  const { isPending, data, error } = useQuery<CompanyProfileResponse, Error>({
    queryKey: ["companyProfile"],
    queryFn: getCompanyProfile,
  });

  return {
    company: data?.data || null,
    isLoading: isPending,
    error,
  };
}
