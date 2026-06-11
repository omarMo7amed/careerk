import type { JobSeeker } from "../types/jobSeeker";
import { authInterceptor, handleApiError } from "@/shared";

export async function getCandidateById(
  jobSeekerId: string,
): Promise<JobSeeker> {
  const res = await authInterceptor(`/job-seekers/${jobSeekerId}`, {});

  if (!res.ok) {
    await handleApiError(res, "Failed to fetch candidate details");
  }

  const { data } = await res.json();
  return data as JobSeeker;
}
