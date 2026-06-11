import { authInterceptor, handleApiError } from "@/shared";

export async function requestImprovement() {
  const res = await authInterceptor(`/job-seekers/me/skill-analysis`, {
    method: "POST",
  });

  if (!res.ok) {
    return handleApiError(res, "Failed to request improvement");
  }

  return await res.json();
}
