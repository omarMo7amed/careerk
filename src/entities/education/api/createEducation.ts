import type { Education } from "../types/types";

export type CreateEducationInput = Omit<Education, "id">;

export async function createEducation(
  token: string,
  education: CreateEducationInput,
): Promise<Education> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/me/educations`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(education),
    },
  );

  if (!res.ok) throw new Error("Failed to create education");
  return res.json();
}
