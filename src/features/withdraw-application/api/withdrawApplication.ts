import { authInterceptor } from "@/shared";
import { WithdrawApplicationResponse } from "../types/WithdrawResponse";

export async function withdrawApplication(
  applicationId: string,
): Promise<WithdrawApplicationResponse> {
  try {
    const response = await authInterceptor(
      `/job-seekers/me/applications/${applicationId}`,
      {
        method: "PATCH",
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
