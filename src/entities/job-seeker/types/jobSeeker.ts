import { JobType, WorkPreference } from "@/entities/company-job";
import { Education } from "@/entities/education";
import { WorkExperience } from "@/entities/experience";
import { JobSeekerSkill } from "@/entities/skill";
import { AvailabilityStatus } from "./availabilityStatus";

export interface JobSeekerProfile {
  jobSeekerId: string;
  title: string;
  location: string;
  availabilityStatus: AvailabilityStatus | null;
  workPreference: WorkPreference | null;
  preferredJobTypes: JobType[];
  yearsOfExperience: number;
  linkedinUrl?: string | null;
  portfolioUrl?: string | null;
  githubUrl?: string | null;
  cvEmail?: string | null;
  email?: string | null; //missed
  noticePeriod?: string | null;
  phone?: string | null;
  expectedSalary: number | null;
  summary: string | null;
  /** CV quality score calculated when the job seeker uploads their CV */
  cvScore?: number | null; //missed
  /** Percentage match between this CV and a specific job requirement */
  cvMatchPercentage?: number | null; //missed
  cvUrl: string | null; // missed
}

export interface JobSeekerBase {
  firstName: string;
  lastName: string;
  profileImageUrl: string | null;
}

export interface JobSeeker extends JobSeekerBase {
  profile: JobSeekerProfile;
  educations?: Education[];
  workExperiences?: WorkExperience[];
  skills?: JobSeekerSkill[];
}
