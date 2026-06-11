import { CompanyJob } from "../types/companyJob";
import { authInterceptor, handleApiError } from "@/shared";

export async function updateCompanyJob(
  jobId: string,
  data: Partial<CompanyJob>,
): Promise<CompanyJob> {
  const res = await authInterceptor(`/companies/me/jobs/${jobId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    await handleApiError(res, "Failed to update company job");
  }

  return json.data;
}
