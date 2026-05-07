export async function getMyCVInfo(token: string) {
  try {
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
  } catch (error) {
    throw new Error(
      "Failed to fetch CV info: " +
        (error instanceof Error ? error.message : String(error)),
    );
  }
}
