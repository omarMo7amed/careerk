import type { CompanyJob } from "@/entities/company-job";
import { GetCompanyJobsResponse } from "@/entities/company-job";

export async function getCompanyJobs(token: string): Promise<CompanyJob[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/companies/me/jobs`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const json: GetCompanyJobsResponse = await res.json();

  if (!res.ok) {
    throw new Error(json?.message || "Failed to fetch jobs");
  }

  return json.data;
}
