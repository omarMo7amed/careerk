"use client";

import { useQuery } from "@tanstack/react-query";
import { getCompanyProfile } from "../api/getCompanyProfile";
import { CompanyProfile } from "../types/CompanyProfile";

export function useCompanyProfileQuery() {
  const { isPending, data, error } = useQuery<CompanyProfile, Error>({
    queryKey: ["companyProfile"],
    queryFn: getCompanyProfile,
  });

  return {
    company: data,
    isLoading: isPending,
    error,
  };
}
