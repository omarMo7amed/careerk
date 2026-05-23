import { AUTH_ENDPOINTS } from "../config/auth.endpoints";
import type { RefreshTokenResponse } from "./types";

import { handleApiError } from "../lib/handleError";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:3000/api/v1";

export async function refreshToken(): Promise<RefreshTokenResponse> {
  const res = await fetch(`${BASE_URL}${AUTH_ENDPOINTS.REFRESH}`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    await handleApiError(res, "Token refresh failed");
  }

  return res.json();
}
