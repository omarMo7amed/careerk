"use client";

import { useMutation } from "@tanstack/react-query";
import { logout } from "../api/logout";
import { useAuthStore } from "@/shared";
import { toast } from "react-hot-toast";

export function useLogout() {
  const clearAuth = useAuthStore((s) => s.clearAuth);

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearAuth();
    },
    onError: () => {
      toast.error("Failed to logout. Please try again.");
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
