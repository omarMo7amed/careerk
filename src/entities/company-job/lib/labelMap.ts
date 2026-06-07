import {
  ExperienceLevel,
  JobStatus,
  JobType,
  WorkPreference,
} from "../types/companyJob";

export const jobTypeLabels: Record<JobType, string> = {
  FULL_TIME: "Full-time",
  PART_TIME: "Part-time",
  CONTRACT: "Contract",
  FREELANCE: "Freelance",
  INTERNSHIP: "Internship",
};

export const workPreferenceLabels: Record<WorkPreference, string> = {
  ONSITE: "On-site",
  REMOTE: "Remote",
  HYBRID: "Hybrid",
  ANY: "Any",
};

export const experienceLevelLabels: Record<ExperienceLevel, string> = {
  ENTRY: "Entry-level",
  JUNIOR: "Junior",
  MID: "Mid-level",
  SENIOR: "Senior",
  LEAD: "Lead",
  MANAGER: "Manager",
};

export const JobStatusLabels: Record<JobStatus, string> = {
  PUBLISHED: "Published",
  PAUSED: "Paused",
};
