import type { CVConfirmPayload } from "../types/cvParseResponse";
import { authInterceptor } from "@/shared";

export async function confirmCVParse(payload: CVConfirmPayload) {
  console.log("Confirming CV parse with payload:", payload);
  try {
    const res = await authInterceptor(`/cv-parse/confirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return res.json();
  } catch (error) {
    console.error("Error confirming CV parse:", error);
    throw error; // Re-throw the error after logging it
  }
}
