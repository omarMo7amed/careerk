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

JobSeeker Endpoints (Amr Docs):

- GET /api/v1/job-seekers
- GET /api/v1/job-seekers/me
  return skillId for each skill and id for each education with the same name

- PATCH /api/v1/job-seekers/me
  i want to return just the data modified not all object ( you corrupt my cache hasbya allah wa n3ma el wakel )

export interface CandidateData {
firstName: string;
lastName: string;
profileImageUrl: string | null; // missed
profile: {
jobSeekerId: string;
title: string;
location: string;
availabilityStatus: "NOT_LOOKING" | "AVAILABLE" | "OPEN_TO_OFFERS";
workPreference: "REMOTE" | "ONSITE" | "HYBRID" | "OTHER";
preferredJobTypes: ("FULL_TIME" | "PART_TIME" | "CONTRACT" | "FREELANCE" | "INTERNSHIP")[];
yearsOfExperience: number;//missed
linkedinUrl: string | null;
portfolioUrl: string | null;
githubUrl: string | null;
summary: string | null; // missed
expectedSalary: number | null; // missed
email: string | null; // missed
cvScore: number | null; // missed i want this in public
cvMatchPercentage: number | null; // missed i want this for authenticated
cvUrl: string | null; // missed
};
skills: { name: string; verified: boolean }[]; // missed
}

matches Endpoints (Amr Docs):

- GET /api/v1/job-seekers/me/matches

i want it as - GET /api/v1/jobs with our modifications + keep matchScore

Skills Endpoints (Amr Docs):

- DELETE /api/v1/job-seekers/me/skills/:skillId
  i want it /api/v1/job-seekers/me/skills and i will send patch of ids in body with ids of skills as this {
  method: "DELETE",
  // headers: {
  // Authorization: `Bearer ${token}`,
  // },
  body: JSON.stringify({ ids: skillIds }),
  },

CV Endpoints (Amr Docs):
GET /api/v1/cv/me/download-url
i want response as this interface DownloadCVResponse {
downloadUrl: string;
expiresAt: string;
expiresIn: number;
}
