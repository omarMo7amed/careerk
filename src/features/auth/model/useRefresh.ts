"use client";

import { useMutation } from "@tanstack/react-query";
import { useAuthStore, refreshToken } from "@/shared";

export function useRefresh() {
  const setAuth = useAuthStore((s) => s.setAuth);

  const mutation = useMutation({
    mutationFn: refreshToken,
    onSuccess: (res) => {
      const token = res?.data?.accessToken || res?.accessToken;
      const role = res?.data?.role || res?.role || res?.user?.role;
      if (token && role) {
        setAuth(token, role);
      }
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
