import { AUTH_ENDPOINTS } from "../config/auth.endpoints";
import type { RegisterJobSeekerRequest, RegisterResponse } from "./types";

import { handleApiError } from "../lib/handleError";

const BASE_URL = process.env.BASE_API_URL ?? "http://localhost:3000/api/v1";

export async function registerJobSeeker(
  data: RegisterJobSeekerRequest,
): Promise<RegisterResponse> {
  const res = await fetch(`${BASE_URL}${AUTH_ENDPOINTS.REGISTER_JOB_SEEKER}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    await handleApiError(res, "Registration failed");
  }

  return res.json();
}
