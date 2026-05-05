import { Education } from "@/entities/education";
import { WorkExperience } from "@/entities/experience";
import { JobSeekerProfile } from "@/entities/job-seeker";
import { JobSeekerSkill } from "@/entities/skill";

export type PersonalInfo = Pick<
  JobSeekerProfile,
  | "cvEmail"
  | "phone"
  | "location"
  | "linkedinUrl"
  | "githubUrl"
  | "portfolioUrl"
> & {
  yearsOfExperience: number;
};
