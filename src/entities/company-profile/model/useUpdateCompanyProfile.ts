/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CompanyProfile } from "../types/CompanyProfile";
import { updateCompanyProfile } from "../api/updateCompanyProfile";

export function useUpdateCompanyProfile() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (data: Partial<CompanyProfile>) => updateCompanyProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companyProfile"] });
    },
  });

  return { updateProfile: mutate, isPending, isError };
}
