/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCompanyProfile } from "../api/updateCompanyProfile";
import { CompanyProfile } from "../types/CompanyProfile";

export function useUpdateCompanyProfile() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (data: Partial<CompanyProfile>) =>
      updateCompanyProfile(data.id!, data),
    onSuccess: (response) => {
      if (response.success) {
        queryClient.setQueryData(["companyProfile"], response.data);
      }
    },
    onError: (error) => {
      console.error("Update company profile error:", error);
    },
  });

  return { updateProfile: mutate, isPending, isError };
}
