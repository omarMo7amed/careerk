import type { Education } from "../types/types";
import { getMe } from "@/entities/job-seeker/api/getMe";

/**
 * Fetch only the educations slice.
 * Swap body for `fetch("/api/job-seekers/me/educations")` when ready.
 */
export async function getMyEducations(): Promise<Education[]> {
  const { educations } = await getMe();
  return educations;
}
