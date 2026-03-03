import type { WorkExperience } from "../types/types";
import { getMe } from "@/entities/job-seeker/api/getMe";

/**
 * Fetch only the work-experiences slice.
 * Swap body for `fetch("/api/job-seekers/me/work-experiences")` when ready.
 */
export async function getMyWorkExperiences(): Promise<WorkExperience[]> {
  const { workExperiences } = await getMe();
  return workExperiences;
}
