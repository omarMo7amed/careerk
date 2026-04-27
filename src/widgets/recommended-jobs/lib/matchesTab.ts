import { Job } from "@/entities/job";

export function matchesTab(job: Job, key: string): boolean {
  if (key === "all") return true;
  console.log(
    "Matching job",
    job.workPreference,
    "against tab",
    key.replace("-", "_").toUpperCase(),
  );
  return (
    job.experienceLevel?.toLowerCase() === key.split("-")[0].toLowerCase() ||
    job.jobType === key.replace("-", "_").toUpperCase() ||
    job.workPreference === key.replace("-", "").toUpperCase()
  );
}

//  return (
//     job.experienceLevel === key.split("-")[0].toLowerCase() ||
// ||
//     job.workPreference === key.toUpperCase()
//   );
