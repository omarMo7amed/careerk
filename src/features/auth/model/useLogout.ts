"use client";

import { useMutation } from "@tanstack/react-query";
import { logout } from "../api/logout";
import { useAuthStore } from "./useAuthStore";

export function useLogout() {
  const clearAuth = useAuthStore((s) => s.clearAuth);

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearAuth();
    },
    onError: () => {
      clearAuth();
    },
  });

  return {
    logout: mutation.mutate,
    logoutAsync: mutation.mutateAsync,
    isLoggingOut: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
