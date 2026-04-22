Jobs Endpoints (Amr Docs):

- GET /api/v1/jobs
- GET /api/v1/jobs/direct/{jobId}
- GET /api/v1/jobs/scraped/{jobId}

// filteration based on workPreference ,experienceLevel (missed)

export interface ScrapedJob {
id: string;
type: "scraped"; // missed
title: string;
description: string;
location: string | null;
salary: string;
jobType: JobType;
companyName: string;
sourceUrl: string;
postedAt: string;
source: "LinkedIn" | "Indeed" | "Glassdoor" | "Bayt" | "Wuzzuf" | "Careerk"; //missed
skills: {skillId:string , name:string};
}

export interface DirectJob {
id: string;
type: 'direct' //missed
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
deadline: string | null;
publishedAt: string | null; // convert posted at to publisedhAt in direct Job onlyyyyy
company: { // missed
id: string;
name: string;
logoUrl: string | null;
industry?: string;
};
skills: {skillId:string , name:string};
applicants?: number; // missed
}
