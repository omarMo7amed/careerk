import { AUTH_ENDPOINTS } from "../config/auth.endpoints";
import type { LogoutResponse } from "../types";

import { handleApiError } from "@/shared";

export async function logout(): Promise<LogoutResponse> {
  // Uses local proxy route so the refresh-token cookie is forwarded server-side
  const res = await fetch(AUTH_ENDPOINTS.LOGOUT, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    await handleApiError(res, "Logout failed");
  }

  return res.json();
}
