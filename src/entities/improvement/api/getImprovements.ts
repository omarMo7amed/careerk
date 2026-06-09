import { authInterceptor } from "@/shared";

export async function getImprovements() {
  const res = await authInterceptor("/job-seekers/me/skill-analysis/latest", {
    method: "GET",
  });

  if (!res.ok) throw new Error("Failed to fetch improvement report");
  return await res.json();
}
