import { AUTH_ENDPOINTS } from "../config/auth.endpoints";

import { handleApiError, LoginResponse } from "@/shared";
import { LoginRequest } from "../types/index";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function login(data: LoginRequest): Promise<LoginResponse> {
  const res = await fetch(`${BASE_URL}${AUTH_ENDPOINTS.LOGIN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    await handleApiError(res, "Login failed");
  }

  return res.json();
}
