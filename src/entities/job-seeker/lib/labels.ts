import type { WorkPreference, JobType } from "../types/jobSeeker";

export const WORK_PREFERENCE_LABELS: Record<WorkPreference, string> = {
  remote: "Remote",
  "on-site": "On-site",
  hybrid: "Hybrid",
  other: "Other",
};

export const JOB_TYPE_LABELS: Record<JobType, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  freelance: "Freelance",
  internship: "Internship",
};
