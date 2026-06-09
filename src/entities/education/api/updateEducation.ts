import type { Education } from "../types/types";
import { authInterceptor } from "@/shared";

export async function updateEducation(
  id: string,
  patch: Partial<Education>,
): Promise<Education> {
  const res = await authInterceptor(
    `/job-seekers/me/educations/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(patch),
    },
  );

  if (!res.ok) throw new Error("Failed to update education");
  return res.json();
}
