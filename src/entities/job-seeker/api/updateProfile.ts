import { JobSeeker, JobSeekerProfile } from "../types/jobSeeker";

export async function updateProfile(
  token: string,
  patch: Partial<JobSeekerProfile & JobSeeker>,
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/me`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(patch),
    },
  );
  if (!res.ok) throw new Error("Failed to update profile");

  const data = await res.json();
  return data;
}
