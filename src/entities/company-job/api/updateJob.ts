import { mockJobs } from "../mock-jobs/mockJobs";
import { CompanyJob } from "../types/companyJob";

export function updateJob(id: string, updated: CompanyJob): CompanyJob {
  const index = mockJobs.findIndex((j) => j.id === id);
  if (index === -1) throw new Error(`Job ${id} not found`);
  mockJobs[index] = updated; // mutates the array in place
  return mockJobs[index];
}
