import { JobSeeker, JobSeekerProfile } from "../types/jobSeeker";
import { authInterceptor } from "@/shared";

export async function updateProfile(
  patch: Partial<JobSeekerProfile & JobSeeker>,
) {
  const res = await authInterceptor(`/job-seekers/me`, {
    method: "PATCH",
    body: JSON.stringify(patch),
  });

  if (!res.ok) throw new Error("Failed to update profile");

  const data = await res.json();
  return data;
}
