"use client";

import { useEffect } from "react";
import { useAuthStore, refreshToken } from "@/shared";

export function useAuthInit() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  useEffect(() => {
    refreshToken()
      .then((res) => {
        const token = res?.data?.accessToken || res?.accessToken;
        const role = res?.data?.role || res?.role || res?.user?.role;
        if (token && role) {
          setAuth(token, role);
        } else {
          clearAuth();
        }
      })
      .catch(() => {
        clearAuth();
      });
  }, []);
}
