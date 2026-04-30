import { WithdrawApplicationResponse } from "../types/WithdrawResponse";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000/api/v1";

export async function withdrawApplication(
  applicationId: string,
): Promise<WithdrawApplicationResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/applications/${applicationId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );
    const data = await response.json();

    if (!response.ok) {
      return data;
    }

    return data;
  } catch (error) {
    console.error("Error withdrawing application:", error);
    throw new Error("Failed to withdraw application. Please try again later.");
  }
}
