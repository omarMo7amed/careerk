export async function getOverview(token: string | null) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const res = await fetch(`${BASE_URL}/job-seekers/overview`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch job seeker overview");
  const data = await res.json();
  return data;
}
