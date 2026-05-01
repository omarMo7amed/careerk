// import { mockJobs } from "../mock-jobs/mockJobs";

import { axiosInstance } from "@/shared/api/axiosInstance";
import { DeleteJobResponse } from "../types/companyJob";

// export function deleteJob(id: string): void {
//   const jobs = mockJobs.filter((j) => j.id !== id);
//   console.log(jobs);
// }
export async function deleteCompanyJob(id: string) {
  console.log("Deleting from frontend:", id);
  const { data } = await axiosInstance.delete<DeleteJobResponse>(
    `/company-jobs/${id}`,
  );
  return data.data.id;
}
