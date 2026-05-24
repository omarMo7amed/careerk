export async function deleteCVParse(token: string): Promise<void> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/cv-parse`, {
    method: "DELETE",
    headers: {
      // Authorization: `Bearer ${token}`,
      // "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("cv/api/deleteCVParse.ts تعالي شوف خيبتك يابيه");
  }
}
