import { ApplicationStatus, WorkPreference } from "@/entities/application";
import { AvailabilityStatus } from "@/shared";

export interface JobSeekerProfile {
  title: string;
  summary: string;
  location: string;
  yearsOfExperience: number;
  availabilityStatus: AvailabilityStatus | null;
  workPreference: WorkPreference | null;
  expectedSalary: number | null;
  linkedinUrl: string | null;
  githubUrl: string | null;
  email: string | null;
  phone: string | null;
  cvMatchPercentage: number | null;
  cvScore: number | null;
  cvUrl: string | null;
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
  email: string;
  profile: JobSeekerProfile;
  skills: JobSeekerSkill[];
}

export interface DirectJob {
  id: string;
  title: string;
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
  data: JobApplication;
  message: string;
}
