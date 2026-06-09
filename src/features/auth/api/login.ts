import { AUTH_ENDPOINTS } from "../config/auth.endpoints";

import { handleApiError, LoginResponse } from "@/shared";
import { LoginRequest } from "../types/index";

export async function login(data: LoginRequest): Promise<LoginResponse> {
  // Uses local proxy route so the refresh-token cookie is set on localhost
  const res = await fetch(AUTH_ENDPOINTS.LOGIN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    await handleApiError(res, "Login failed");
  }

  return res.json();
}
