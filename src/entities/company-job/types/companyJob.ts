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

export type JobStatus = "PUBLISHED" | "PAUSED";

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

export interface GetCompanyJobResponse<T> {
  success: boolean;
  data: T;
  message: string;
  meta: ApiMeta;
}
export interface DeleteJobResponse {
  success: boolean;
  data: Record<string, never>; // {}
  message: string;
  meta: ApiMeta;
}
