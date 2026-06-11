/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";
import { useAuthStore } from "@/shared";
import type { LoginRequest } from "../types";
import type { LoginResponse } from "@/shared";

export function useLogin() {
  const setAuth = useAuthStore((s) => s.setAuth);

  const { mutateAsync, isPending, isSuccess, isError, error } = useMutation<
    LoginResponse,
    Error,
    LoginRequest
  >({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: async (res: LoginResponse) => {
      setAuth(res.data.accessToken, res.data.role);
    },
  });

  return {
    login: mutateAsync,
    isPending,
    isSuccess,
    isError,
    error,
  };
}
