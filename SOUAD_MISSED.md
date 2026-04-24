Jobs Endpoints (Amr Docs):

- GET /api/v1/companies/me/jobs

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
