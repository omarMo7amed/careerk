import { CompanyJob, GetCompanyJobResponse } from "../types/companyJob";
import { JobPostFormData } from "@/features/post-job-form";
import { authInterceptor } from "@/shared";

export type CreateJobPayload = Omit<JobPostFormData, "skills"> & {
  skillNames: string[];
};

export async function createCompanyJob(
  payload: CreateJobPayload
): Promise<CompanyJob> {
  const res = await authInterceptor(
    `/companies/me/jobs`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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
