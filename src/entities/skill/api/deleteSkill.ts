export async function deleteSkill(token: string, skillIds: string[]) {
  if (skillIds.length === 0) return { data: [] };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/me/skills`,
    {
      method: "DELETE",
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      body: JSON.stringify({ ids: skillIds }),
    },
  );
  if (!res.ok) throw new Error("Failed to delete skill");
  return res.json();
}
