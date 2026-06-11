import { authInterceptor, handleApiError } from "@/shared";

export async function applyNow(jobId: string) {
  const res = await authInterceptor("/job-seekers/me/applications", {
    method: "POST",
    body: JSON.stringify({ jobId }),
  });
  if (!res.ok) await handleApiError(res, "Failed to apply for the job");
}
