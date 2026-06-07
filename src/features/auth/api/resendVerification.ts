import { AUTH_ENDPOINTS } from "../config/auth.endpoints";

import { handleApiError } from "@/shared";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:3000/api/v1";

export async function resendVerification(data: { email: string }) {
  const res = await fetch(`${BASE_URL}${AUTH_ENDPOINTS.RESEND_VERIFICATION}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    await handleApiError(res, "Failed to resend verification email");
  }

  return res.json();
}
