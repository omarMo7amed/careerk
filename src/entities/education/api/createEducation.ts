import type { Education } from "../types/types";
import { authInterceptor } from "@/shared";

export type CreateEducationInput = Omit<Education, "id">;

export async function createEducation(
  education: CreateEducationInput,
): Promise<{ data: Education }> {
  console.log("Creating education with data:", education);
  try {
    const res = await authInterceptor("/job-seekers/me/educations", {
      method: "POST",
      body: JSON.stringify(education),
    });

    if (!res.ok) throw new Error("Failed to create education");
    const data = await res.json();
    console.log("Create education response:", data);
    return data;
  } catch (error) {
    console.error("Error creating education:", error);
    throw error; // Re-throw the error after logging it
  }
}
