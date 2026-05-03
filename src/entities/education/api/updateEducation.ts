import type { Education } from "../types/types";

export async function updateEducation(
  token: string,
  id: string,
  patch: Partial<Education>,
): Promise<Education> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/me/educations/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(patch),
    },
  );

  if (!res.ok) throw new Error("Failed to update education");
  return res.json();
}
