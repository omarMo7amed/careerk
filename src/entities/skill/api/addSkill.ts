export async function addSkill(token: string, skills: string[]) {
  if (skills.length === 0) return { data: [] };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/me/skills`,
    {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${token}`,
      // },
      body: JSON.stringify({ skillNames: skills }),
    },
  );
  if (!res.ok) {
    throw new Error("Failed to add skills");
  }
  const data = await res.json();
  return data;
}
