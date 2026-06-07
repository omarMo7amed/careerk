export interface JobSeekerOverview {
  hasProfile: boolean;
  linkedIn: string | null;
  github: string | null;
  totalRecommendedJobs: number;
  lastLoginAt: string;
}

export async function getOverview(token: string | null) {
  const res = await fetch(`/api/v1/job-seekers/overview`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!res.ok) throw new Error("Failed to fetch job seeker overview");

  return res.json();
}
