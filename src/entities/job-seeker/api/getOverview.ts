import { authInterceptor } from "@/shared";

export async function getOverview() {
  const res = await authInterceptor(`/job-seekers/me/overview`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch job seeker overview");
  const data = await res.json();
  return data;
}
