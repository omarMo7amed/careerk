import { JobSeeker } from "../types/jobSeeker";
import { mockJobSeeker } from "../mock-data/jobSeeker";

export async function getMe(): Promise<JobSeeker> {
  // TODO: Replace with real API call
  // const res = await fetch("/api/job-seekers/me", { signal });
  // if (!res.ok) throw new Error("Failed to fetch job seeker profile");
  // return res.json();

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockJobSeeker;
}
