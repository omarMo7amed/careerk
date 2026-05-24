import { CompanyJob } from "@/entities/company-job";
import type { JobSkill, JobType } from "@/entities/company-job";

export interface Job extends Partial<CompanyJob>, Partial<ScrapedJob> {
  type: "direct" | "scraped";
  matchScore?: number; // For job matching algorithm
}

export interface ScrapedJob {
  id: string;
  title: string;
  description: string;
  location: string | null;
  salary: string;
  jobType: JobType;
  companyName: string;
  sourceUrl: string;
  postedAt: string;
  source: "LinkedIn" | "Indeed" | "Glassdoor" | "Bayt" | "Wuzzuf" | "Careerk"; //missed
  skills: JobSkill[];
}

export type JobsResponse = {
  data: {
    jobs: Job[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type GetJobsOptions = {
  signal?: AbortSignal;
  page?: number;
  limit?: number;
  search?: string;
  location?: string;
  workPreference?: string[];
  experienceLevel?: string[];
  jobType?: JobType[];
  jobSource?: string[];
  token?: string;
};
