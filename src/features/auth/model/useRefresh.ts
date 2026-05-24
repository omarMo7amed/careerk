"use client";

import { useMutation } from "@tanstack/react-query";
import { refreshToken } from "../api/refreshToken";
import { useAuthStore } from "./useAuthStore";

export function useRefresh() {
  const setAuth = useAuthStore((s) => s.setAuth);

  const mutation = useMutation({
    mutationFn: refreshToken,
    onSuccess: ({ accessToken, user }) => {
      setAuth(accessToken, user);
    },
  });

  return {
    refresh: mutation.mutate,
    refreshAsync: mutation.mutateAsync,
    isRefreshing: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
