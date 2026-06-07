import type { CVConfirmPayload } from "../types/cvParseResponse";

export async function confirmCVParse(payload: CVConfirmPayload, token: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/cv-parse/confirm`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    },
  );

  if (!res.ok) {
    throw new Error("Failed to confirm CV parse");
  }

  return await res.json();
}
