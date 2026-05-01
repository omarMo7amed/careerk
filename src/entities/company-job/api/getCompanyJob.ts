import { axiosInstance } from "@/shared/api/axiosInstance";
import { CompanyJob, GetCompanyJobResponse } from "../types/companyJob";

export async function getCompanyJob(jobId: string): Promise<CompanyJob> {
  const { data } = await axiosInstance.get<GetCompanyJobResponse<CompanyJob>>(
    `/company-jobs/${jobId}`,
  );
  console.log(data.data);
  return data.data;
}
