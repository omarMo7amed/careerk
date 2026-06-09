import { handleApiError } from "../lib/handleError";

/**
 * Calls the local Next.js proxy route, which forwards the request
 * to the real backend server-side (avoids cross-origin cookie issues).
 */
export async function refreshToken() {
  const res = await fetch("/api/v1/auth/refresh-token", {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    await handleApiError(res, "Token refresh failed");
  }

  return res.json();
}
