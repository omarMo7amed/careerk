import { CompanyJob, GetCompanyJobResponse } from "../types/companyJob";
import { authInterceptor } from "@/shared";

export async function getDirectJobById(jobId: string): Promise<CompanyJob> {
  const res = await authInterceptor(`/jobs/direct/${jobId}`, {
    method: "GET",
  });

  const json: GetCompanyJobResponse<CompanyJob> = await res.json();

  if (!res.ok) {
    throw new Error(json?.message || "Failed to fetch job");
  }

  return json.data;
}
