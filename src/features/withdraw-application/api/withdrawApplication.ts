import { authInterceptor } from "@/shared";
import { WithdrawApplicationResponse } from "../types/WithdrawResponse";

export async function withdrawApplication(
  applicationId: string,
): Promise<WithdrawApplicationResponse> {
  const response = await authInterceptor(
    `/job-seekers/me/applications/${applicationId}`,
    {
      method: "PATCH",
    },
  );

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.error?.message || `Failed to withdraw application (${response.status})`);
  }

  if (!data || typeof data.success === "undefined") {
    throw new Error("Invalid response from server");
  }

  return data as WithdrawApplicationResponse;
}
