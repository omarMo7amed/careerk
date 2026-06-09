import { JobSeekerProfile } from "@/entities/job-seeker";
import { Education } from "@/entities/education";
import { WorkExperience } from "@/entities/experience";
import { JobSeekerSkill } from "@/entities/skill";

export type ParseStatus = "COMPLETED" | "PROCESSING" | "FAILED";

export interface CVParseResponse {
  status: ParseStatus;
  parseResultId: string;
  firstName: string;
  lastName: string;
  profileImageUrl: string | null;
  profile: JobSeekerProfile;
  educations: Education[];
  workExperiences: WorkExperience[];
  skills: JobSeekerSkill[];
  processingTime: number;
}

export interface CVConfirmPayload {
  parseResultId: string;
  data: {
    firstName?: string;
    lastName?: string;
    cvEmail?: string;
    phone?: string;
    location?: string;
    linkedinUrl?: string;
    githubUrl?: string;
    portfolioUrl?: string;
    title?: string;
    summary?: string;
    expectedSalary?: number | null;
    noticePeriod?: number | null;
    workPreference: string;
    availabilityStatus: string;
    education?: Education[];
    workExperience?: WorkExperience[];
    skills?: string[];
  };
}
