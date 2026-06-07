import { JobSeeker, JobSeekerProfile } from "../types/jobSeeker";

export async function updateProfile(
  token: string | null,
  patch: Partial<JobSeekerProfile & JobSeeker>,
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/me`,
    {
      method: "PATCH",
      body: JSON.stringify(patch),
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    },
  );

  if (!res.ok) throw new Error("Failed to update profile");

  const data = await res.json();
  return data;
}
