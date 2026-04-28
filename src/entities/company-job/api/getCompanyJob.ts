// import { notFound } from "next/navigation";
// import { mockJobs } from "../mock-jobs/mockJobs";

// export function getJob(id: string) {
//   const jobPost = mockJobs.find((job) => job.id === id);
//   if (!jobPost) {
//     notFound(); // shows 404 page
//   }
//   return jobPost;
// }

import { axiosInstance } from "@/shared/api/axiosInstance";
import { CompanyJob, GetCompanyJobResponse } from "../types/companyJob";
export async function getCompanyJob(jobId: string): Promise<CompanyJob> {
  const { data } = await axiosInstance.get<GetCompanyJobResponse<CompanyJob>>(
    `/company-jobs/${jobId}`,
  );
  console.log(data.data);
  return data.data;
}
