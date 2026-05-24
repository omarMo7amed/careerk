export async function getImprovements(token: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/me/skill-analysis/latest`,
    {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch improvement report");
  return await res.json();
}
