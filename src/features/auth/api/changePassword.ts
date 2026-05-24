import { AUTH_ENDPOINTS } from "../config/auth.endpoints";
import type { ChangePasswordRequest, ChangePasswordResponse } from "./types";

import { handleApiError } from "../lib/handleError";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:3000/api/v1";

export async function changePassword(
  data: ChangePasswordRequest,
  accessToken: string,
): Promise<ChangePasswordResponse> {
  const res = await fetch(`${BASE_URL}${AUTH_ENDPOINTS.CHANGE_PASSWORD}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    await handleApiError(res, "Password change failed");
  }

  return res.json();
}
