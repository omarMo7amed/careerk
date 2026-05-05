export async function getMyCVInfo(token: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/cv-parse/preview`,
    {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch CV info");
  }
  return res.json();
}
