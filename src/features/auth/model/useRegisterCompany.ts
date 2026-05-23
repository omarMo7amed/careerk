"use client";

import { useMutation } from "@tanstack/react-query";
import { registerCompany } from "../api/registerCompany";
import type { RegisterCompanyRequest } from "../api/types";

export function useRegisterCompany() {
  const { mutateAsync, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: (data: RegisterCompanyRequest) => registerCompany(data),
  });

  return {
    registerCompany: mutateAsync,
    isPending,
    isSuccess,
    isError,
    error,
  };
}
