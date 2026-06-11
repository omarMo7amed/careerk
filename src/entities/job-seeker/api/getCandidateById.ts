import type { JobSeeker } from "../types/jobSeeker";
import { authInterceptor } from "@/shared";

export async function getCandidateById(
  jobSeekerId: string,
): Promise<JobSeeker> {
  const res = await authInterceptor(`/job-seekers/${jobSeekerId}`, {});

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error(`Candidate not found`);
    }
    throw new Error("Failed to fetch candidate");
  }

  const { data } = await res.json();
  return data as JobSeeker;
}
