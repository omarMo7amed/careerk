import { CompanyJob, GetCompanyJobResponse } from "../types/companyJob";

export async function getCompanyJob(
  jobId: string,
  token: string,
): Promise<CompanyJob> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/companies/me/jobs/${jobId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const json: GetCompanyJobResponse<CompanyJob> = await res.json();

  if (!res.ok) {
    throw new Error(json?.message || "Failed to fetch job");
  }

  return json.data;
}
