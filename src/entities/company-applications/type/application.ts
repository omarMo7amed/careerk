import {
  ApplicationStatus,
  WorkPreference,
  JobType,
} from "@/entities/application";
import { AvailabilityStatus } from "@/entities/job-seeker";

export interface JobSeekerProfile {
  title: string;
  location: string;
  yearsOfExperience: number;

  // Optional (not returned in this endpoint but kept for reuse)
  summary?: string;
  availabilityStatus?: AvailabilityStatus | null;
  workPreference?: WorkPreference | null;
  expectedSalary?: number | null;
  linkedinUrl?: string | null;
  githubUrl?: string | null;
  email?: string | null;
  phone?: string | null;
  cvMatchPercentage?: number | null;
  cvScore?: number | null;
  cvUrl?: string | null;
}

export interface JobSeekerSkill {
  id: string;
  name: string;
  verified: boolean;
}

export interface JobSeeker {
  id: string;
  firstName: string;
  lastName: string;
  profileImageUrl: string | null;
  profile: JobSeekerProfile;

  // To be added
  skills: JobSeekerSkill[];
  email: string;
}

export interface DirectJob {
  id: string;
  title: string;
  location: string;
  jobType: JobType | null;
}

export interface JobApplication {
  id: string;
  status: ApplicationStatus;
  appliedAt: string; // ISO
  updatedAt: string; // ISO
  jobSeeker: JobSeeker;
  directJob: DirectJob;
}

export interface GetApplicationResponse {
  success: boolean;
  data: {
    applications: JobApplication[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  message: string;
}

export interface GetJobApplicationResponse {
  success: boolean;
  data: JobApplication;
  message: string;
}
