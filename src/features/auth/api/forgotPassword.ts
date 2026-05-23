import { AUTH_ENDPOINTS } from "../config/auth.endpoints";
import type { ForgotPasswordRequest, ForgotPasswordResponse } from "./types";

import { handleApiError } from "../lib/handleError";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:3000/api/v1";

export async function forgotPassword(
  data: ForgotPasswordRequest,
): Promise<ForgotPasswordResponse> {
  const res = await fetch(`${BASE_URL}${AUTH_ENDPOINTS.FORGOT_PASSWORD}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    await handleApiError(res, "Failed to send reset email");
  }

  return res.json();
}
