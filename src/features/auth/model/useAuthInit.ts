"use client";

import { useEffect } from "react";
import { refreshToken } from "../api/refreshToken";
import { useAuthStore } from "./useAuthStore";

export function useAuthInit() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  useEffect(() => {
    refreshToken()
      .then(({ accessToken, user }) => {
        setAuth(accessToken, user);
      })
      .catch(() => {
        clearAuth();
      });
  }, []);
}
