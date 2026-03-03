import { mockJobs } from "../mock-jobs/mockJobs";

export function deleteJob(id: string): void {
  const jobs = mockJobs.filter((j) => j.id !== id);
  console.log(jobs);
}
