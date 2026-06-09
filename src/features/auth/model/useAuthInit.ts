"use client";

import { useEffect } from "react";
import { useAuthStore, refreshToken, getPersistedRole } from "@/shared";

const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1000;

async function tryRefreshWithRetry(
  retries: number = MAX_RETRIES,
): Promise<{ token: string; role: string } | null> {
  try {
    const res = await refreshToken();
    const token = res?.data?.accessToken || res?.accessToken;

    // The refresh endpoint only returns accessToken (no role).
    // Fall back to the role persisted in localStorage on last login.
    const roleFromResponse = res?.data?.role || res?.role || res?.user?.role;
    const role = roleFromResponse || getPersistedRole();

    if (token && role) return { token, role };

    // No token means the refresh cookie is invalid/expired
    return null;
  } catch {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      return tryRefreshWithRetry(retries - 1);
    }
    return null;
  }
}

export function useAuthInit() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  useEffect(() => {
    tryRefreshWithRetry().then((result) => {
      if (result) {
        setAuth(result.token, result.role as Parameters<typeof setAuth>[1]);
      } else {
        clearAuth();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
