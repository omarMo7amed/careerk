import { AUTH_ENDPOINTS } from "../config/auth.endpoints";
import type { RegisterCompanyRequest, RegisterResponse } from "./types";

import { handleApiError } from "../lib/handleError";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function registerCompany(
  data: RegisterCompanyRequest,
): Promise<RegisterResponse> {
  const res = await fetch(`${BASE_URL}${AUTH_ENDPOINTS.REGISTER_COMPANY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    await handleApiError(res, "Registration failed");
  }

  return res.json();
}
