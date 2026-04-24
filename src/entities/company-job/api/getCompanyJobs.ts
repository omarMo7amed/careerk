import { axiosInstance } from "@/shared/api/axiosInstance";
import type { CompanyJob } from "@/entities/company-job";
import { GetCompanyJobsResponse } from "@/entities/company-job";

export async function getCompanyJobs(): Promise<CompanyJob[]> {
  const { data } =
    await axiosInstance.get<GetCompanyJobsResponse>("/company-jobs");
  return data.data;
}
