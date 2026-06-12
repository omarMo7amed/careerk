import type { CVConfirmPayload } from "../types/cvParseResponse";
import { authInterceptor, handleApiError } from "@/shared";

export async function confirmCVParse(payload: CVConfirmPayload) {
  console.log("Confirming CV parse with payload:", payload);

  const res = await authInterceptor(`/cv-parse/confirm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return await handleApiError(res, "Failed to confirm CV parse");
  }

  return res.json();
}
