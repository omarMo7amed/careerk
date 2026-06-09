import { CompanyJob, GetCompanyJobResponse } from "../types/companyJob";
import { authInterceptor } from "@/shared";

export async function getCompanyJob(
  jobId: string
): Promise<CompanyJob> {
  const res = await authInterceptor(
    `/companies/me/jobs/${jobId}`,
    {
      method: "GET"
    },
  );

  const json: GetCompanyJobResponse<CompanyJob> = await res.json();

  if (!res.ok) {
    throw new Error(json?.message || "Failed to fetch job");
  }

  return json.data;
}
