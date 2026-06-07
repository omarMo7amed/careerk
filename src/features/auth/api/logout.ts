import { AUTH_ENDPOINTS } from "../config/auth.endpoints";
import type { LogoutResponse } from "../types";

import { handleApiError } from "@/shared";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:3000/api/v1";

export async function logout(): Promise<LogoutResponse> {
  const res = await fetch(`${BASE_URL}${AUTH_ENDPOINTS.LOGOUT}`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    await handleApiError(res, "Logout failed");
  }

  return res.json();
}
