export interface JobSkill {
  skillId: string;
  name: string;
}

export type Company = {
  id: string;
  name: string;
  logoUrl: string | null;
  industry?: string;
};

export type JobType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACT"
  | "FREELANCE"
  | "INTERNSHIP";

export type WorkPreference = "ONSITE" | "REMOTE" | "HYBRID" | "ANY";

export type ExperienceLevel =
  | "ENTRY"
  | "JUNIOR"
  | "MID"
  | "SENIOR"
  | "LEAD"
  | "MANAGER";

export type JobStatus = "DRAFT" | "PUBLISHED" | "PAUSED" | "CLOSED";

export interface CompanyJob {
  id: string;
  title: string;
  description: string;
  requirements: string | null;
  responsibilities: string | null;
  location: string | null;
  salaryMin: number | null;
  salaryMax: number | null;
  jobType: JobType;
  workPreference: WorkPreference;
  experienceLevel: ExperienceLevel;
  status: JobStatus;
  deadline: string | null;
  publishedAt: string | null;
  company: Company;
  skills: JobSkill[];
  applicants?: number; // missed
}

// Meta
export interface ApiMeta {
  timestamp: string;
  path: string;
  method: string;
}

// Response
export interface GetCompanyJobsResponse {
  success: boolean;
  data: CompanyJob[];
  message: string;
  meta: ApiMeta;
}
/**
 * souad , write a readme file called Souad_MISSED.md
 * put the same object but with the missed properties only and add a comment "missed" next to each of them
 * write the endpoints that are use this structure in amr's Docs
 *  */
