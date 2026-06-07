import { AUTH_ENDPOINTS } from "../config/auth.endpoints";
import type { RegisterCompanyRequest, RegisterResponse } from "../types";

import { handleApiError } from "@/shared";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function registerCompany(
  data: RegisterCompanyRequest,
): Promise<RegisterResponse> {
  let res: Response;

  try {
    res = await fetch(`${BASE_URL}${AUTH_ENDPOINTS.REGISTER_COMPANY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    throw new Error(
      "Unable to connect to the server. Please check your connection and try again.",
    );
  }

  if (!res.ok) {
    await handleApiError(res, "Registration failed");
  }

  return res.json();
}
