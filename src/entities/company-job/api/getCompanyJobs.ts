import type { CompanyJob } from "@/entities/company-job";
import { GetCompanyJobsResponse } from "@/entities/company-job";
import { authInterceptor } from "@/shared";

export async function getCompanyJobs(): Promise<CompanyJob[]> {
  const res = await authInterceptor(
    `/companies/me/jobs`,
    {
      method: "GET"
    },
  );

  const json: GetCompanyJobsResponse = await res.json();

  if (!res.ok) {
    throw new Error(json?.message || "Failed to fetch jobs");
  }

  return json.data;
}
