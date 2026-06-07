import { AUTH_ENDPOINTS } from "../config/auth.endpoints";
import type { ResetPasswordRequest, ResetPasswordResponse } from "../types";

import { handleApiError } from "@/shared";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:3000/api/v1";

export async function resetPassword(
  data: ResetPasswordRequest,
): Promise<ResetPasswordResponse> {
  const res = await fetch(`${BASE_URL}${AUTH_ENDPOINTS.RESET_PASSWORD}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    await handleApiError(res, "Password reset failed");
  }

  return res.json();
}
