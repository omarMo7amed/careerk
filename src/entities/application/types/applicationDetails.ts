import { ApplicationStatus, JobType, WorkPreference } from "./applicationCard";

export interface ApplicationDetails {
  id: string;
  status: ApplicationStatus;
  appliedAt: string;
  updatedAt: string;
  directJob: {
    id: string;
    title: string;
    description: string;
    requirements: string;
    responsibilities: string;
    location: string;
    jobType: JobType;
    workPreference: WorkPreference;
    experienceLevel: string;
    salaryMin: number | null;
    salaryMax: number | null;
    company: {
      id: string;
      name: string;
      logoUrl: string | null;
      coverUrl: string | null;
      description: string;
      industry: string;
      size: string;
      websiteUrl: string | null;
      linkedIn: string | null;
    };
    skills: Array<{
      skill: {
        id: string;
        name: string;
      };
    }>;
  };
  matchScore?: number;
}

export interface ApplicationDetailsResponse {
  success: boolean;
  data: ApplicationDetails;
  message: string;
}
