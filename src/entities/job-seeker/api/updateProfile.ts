import { JobSeeker, JobSeekerProfile } from "../types/jobSeeker";

export async function updateProfile(
  data: Partial<JobSeekerProfile & JobSeeker>,
): Promise<Partial<JobSeekerProfile>> {
  // TODO: Replace with real API call
  // const res = await fetch("/api/job-seekers/me/profile", {
  //   method: "PATCH",
  //   body: JSON.stringify(data),
  //   headers: { "Content-Type": "application/json" },
  // });
  // if (!res.ok) throw new Error("Failed to update profile");
  // return res.json();
  await new Promise((resolve) => setTimeout(resolve, 400));
  return data;
}
