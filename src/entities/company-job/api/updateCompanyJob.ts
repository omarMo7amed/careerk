import { CompanyJob } from "../types/companyJob";

export async function updateCompanyJob(
  jobId: string,
  data: Partial<CompanyJob>,
): Promise<CompanyJob> {
  const res = await fetch(`/api/v1/company-jobs/${jobId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || "Failed to update job");
  }

  return json.data;
}
