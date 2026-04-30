import { axiosInstance } from "@/shared/api/axiosInstance";
import { CompanyJob, GetCompanyJobResponse } from "../types/companyJob";
import { JobPostFormData } from "@/features/post-job-form";

export type CreateJobPayload = Omit<JobPostFormData, "skills"> & {
  skillNames: string[];
};

export async function createCompanyJob(
  payload: CreateJobPayload,
): Promise<CompanyJob> {
  const { data } = await axiosInstance.post<GetCompanyJobResponse<CompanyJob>>(
    "/company-jobs",
    payload,
  );
  return data.data;
}
