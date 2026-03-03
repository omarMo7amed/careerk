import { Education } from "@/entities/education";
import { WorkExperience } from "@/entities/experience";
import { AvailabilityStatus } from "@/shared";
import { JobSeekerSkill } from "@/entities/skill";

export type WorkPreference = "remote" | "on-site" | "hybrid" | "other";

export type JobType =
  | "full-time"
  | "part-time"
  | "contract"
  | "freelance"
  | "internship";

export type ExperienceLevel =
  | "Entry Level"
  | "Mid Level"
  | "Senior Level"
  | "Lead"
  | "Executive";

export interface JobSeekerProfile {
  jobSeekerId: string;
  title: string;
  location: string;
  availabilityStatus: AvailabilityStatus | null;
  workPreference: WorkPreference | null;
  preferredJobTypes: JobType[];
  experienceLevel: ExperienceLevel | null;
  yearsOfExperience: number;
  linkedinUrl: string | null;
  portfolioUrl: string | null;
  githubUrl: string | null;
  cvEmail: string | null;
  email: string | null;
  noticePeriod: string | null;
  phone: string | null;
  expectedSalary: number | null;
  summary: string | null;
  /** CV quality score calculated when the job seeker uploads their CV */
  cvScore: number | null;
  /** Percentage match between this CV and a specific job requirement */
  cvMatchPercentage: number | null;
  cvUrl: string | null;
}

export interface JobSeekerBase {
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
}

export interface JobSeeker extends JobSeekerBase {
  profile: JobSeekerProfile;
  educations: Education[];
  workExperiences: WorkExperience[];
  skills: JobSeekerSkill[];
}
