"use client";

import { useMutation } from "@tanstack/react-query";
import { registerJobSeeker } from "../api/registerJobSeeker";
import type { RegisterJobSeekerRequest } from "../api/types";

export function useRegisterJobSeeker() {
  const { mutateAsync, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: (data: RegisterJobSeekerRequest) => registerJobSeeker(data),
  });

  return {
    registerJobSeeker: mutateAsync,
    isPending,
    isSuccess,
    isError,
    error,
  };
}
