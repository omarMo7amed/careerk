import { axiosInstance } from "@/shared/api/axiosInstance";
import { CompanyJob, GetCompanyJobResponse } from "../types/companyJob";
import { JobPostFormData } from "@/features/post-job-form";

export async function createCompanyJob(
  payload: JobPostFormData,
): Promise<CompanyJob> {
  const { data } = await axiosInstance.post<GetCompanyJobResponse<CompanyJob>>(
    "/company-jobs",
    payload,
  );
  return data.data;
}
