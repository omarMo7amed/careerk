export async function getOverview(token: string | null) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/overview`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer dgjkasnhgjldksalgd`,
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch job seeker overview");
  const data = await res.json();
  return data;
}
