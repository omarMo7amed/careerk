import { ApplicationStatus } from "@/entities/application";

export async function updateApplicationStatus(
  id: string,
  status: ApplicationStatus,
  token: string,
): Promise<void> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/companies/me/applications/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    },
  );

  if (!res.ok) {
    throw new Error("Failed to update application status");
  }
}
