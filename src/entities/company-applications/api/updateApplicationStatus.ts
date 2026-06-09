import { ApplicationStatus } from "@/entities/application";
import { authInterceptor } from "@/shared";

export async function updateApplicationStatus(
  id: string,
  status: ApplicationStatus
): Promise<void> {
  const res = await authInterceptor(
    `/companies/me/applications/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    },
  );

  if (!res.ok) {
    throw new Error("Failed to update application status");
  }
}
