import { authInterceptor } from "@/shared";

export async function deleteSkill(skillIds: string[]) {
  if (skillIds.length === 0) return { data: [] };
  const res = await authInterceptor(
    "/job-seekers/me/skills",
    {
      method: "DELETE",
      body: JSON.stringify({ ids: skillIds }),
    },
  );
  if (!res.ok) throw new Error("Failed to delete skill");
  return res.json();
}
