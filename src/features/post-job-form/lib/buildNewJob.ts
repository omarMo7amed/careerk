import {
  CompanyJob,
  JobType,
  ExperienceLevel,
  WorkPreference,
  Company,
  JobStatus,
} from "@/entities/company-job";

import { JobPostFormData } from "../lib/jobPostSchema";

export function buildNewJob(
  data: JobPostFormData,
  company: Company,
): CompanyJob {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),

    company,

    title: data.title,
    description: data.description,

    requirements: data.requirements ?? null,
    responsibilities: null,

    location: data.location ?? null,

    salaryMin: data.salaryMin ? data.salaryMin : undefined,
    salaryMax: data.salaryMax ? data.salaryMax : undefined,

    jobType: data.jobType as JobType,
    workPreference: data.workPreference as WorkPreference,
    experienceLevel: data.experienceLevel as ExperienceLevel,

    status: data.status as JobStatus,

    deadline: data.deadline ?? null,
    publishedAt: now,

    skills: data.skills,
  };
}
