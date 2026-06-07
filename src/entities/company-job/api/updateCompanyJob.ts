import { CompanyJob } from "../types/companyJob";

export async function updateCompanyJob(
  jobId: string,
  data: Partial<CompanyJob>,
  token: string,
): Promise<CompanyJob> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/companies/me/jobs/${jobId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    },
  );

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || "Failed to update job");
  }

  return json.data;
}
