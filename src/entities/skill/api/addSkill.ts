import { authInterceptor } from "@/shared";

export async function addSkill(token: string, skills: string[]) {
  if (skills.length === 0) return { data: [] };
  const res = await authInterceptor(
    "/job-seekers/me/skills",
    {
      method: "POST",
      body: JSON.stringify({ skillNames: skills }),
    },
  );
  if (!res.ok) {
    throw new Error("Failed to add skills");
  }
  const data = await res.json();
  return data;
}
