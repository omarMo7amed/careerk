import { Job } from "@/entities/job";

export function matchesTab(job: Job, key: string): boolean {
  if (key === "all") return true;
  return job.workArrangement === key || job.employmentType === key;
}
