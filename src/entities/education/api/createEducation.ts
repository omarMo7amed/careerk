import type { Education } from "../types/types";
import { authInterceptor } from "@/shared";

export type CreateEducationInput = Omit<Education, "id">;

export async function createEducation(
  token: string,
  education: CreateEducationInput,
): Promise<Education> {
  const res = await authInterceptor("/job-seekers/me/educations", {
    method: "POST",
    body: JSON.stringify(education),
  });

  if (!res.ok) throw new Error("Failed to create education");
  return res.json();
}
