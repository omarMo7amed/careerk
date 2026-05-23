import { AUTH_ENDPOINTS } from "../config/auth.endpoints";

import { handleApiError } from "../lib/handleError";
import { VerifyEmailRequest } from "../types";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:3000/api/v1";

export async function verifyEmail(data: VerifyEmailRequest) {
  const res = await fetch(`${BASE_URL}${AUTH_ENDPOINTS.VERIFY_EMAIL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    await handleApiError(res, "Email verification failed");
  }

  return res.json();
}
