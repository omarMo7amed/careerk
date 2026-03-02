import type { JobSeekerSkill } from "../types/skill";
import { getMe } from "@/entities/job-seeker/api/getMe";

/**
 * Fetch only the skills slice.
 * Swap body for `fetch("/api/job-seekers/me/skills")` when ready.
 */
export async function getMySkills(): Promise<JobSeekerSkill[]> {
  const { skills } = await getMe();
  return skills;
}
