import { authInterceptor, handleApiError } from "@/shared";

export async function publishJob(id: string) {
  const res = await authInterceptor(`/companies/me/jobs/${id}/publish`, {
    method: "POST",
  });

  if (!res.ok) {
    await handleApiError(res, "Failed to update job status");
  }

  return res.json();
}

export async function pauseJob(id: string) {
  const res = await authInterceptor(`/companies/me/jobs/${id}/pause`, {
    method: "POST",
  });

  if (!res.ok) {
    await handleApiError(res, "Failed to update job status");
  }

  return res.json();
}
