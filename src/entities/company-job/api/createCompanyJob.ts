import { CompanyJob, GetCompanyJobResponse } from "../types/companyJob";
import { JobPostFormData } from "@/features/post-job-form";

export type CreateJobPayload = Omit<JobPostFormData, "skills"> & {
  skillNames: string[];
};

export async function createCompanyJob(
  payload: CreateJobPayload,
  token: string,
): Promise<CompanyJob> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/companies/me/jobs`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    },
  );

  const json: GetCompanyJobResponse<CompanyJob> = await res.json();

  if (!res.ok) {
    throw new Error(json?.message || "Failed to create job");
  }

  return json.data;
}
