import type { JobSeeker } from "../types/jobSeeker";

export async function getCandidateById(
  jobSeekerId: string,
): Promise<JobSeeker> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/${jobSeekerId}`,
  );

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error(`Candidate not found`);
    }
    throw new Error("Failed to fetch candidate");
  }

  const { data } = await res.json();
  return data as JobSeeker;
}
