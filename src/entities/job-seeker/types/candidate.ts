import type { JobSeeker, JobSeekerProfile } from "./jobSeeker";
import type { JobSeekerSkill } from "@/entities/skill";
export type { JobSeekerSkill };

export type Candidate = Pick<
  JobSeeker,
  "firstName" | "lastName" | "avatarUrl" | "skills"
> &
  Pick<
    JobSeekerProfile,
    | "jobSeekerId"
    | "title"
    | "location"
    | "summary"
    | "phone"
    | "email"
    | "expectedSalary" //missed from the database
    | "workPreference"
    | "availabilityStatus"
    | "linkedinUrl"
    | "portfolioUrl"
    | "githubUrl"
    | "experienceLevel" //| "yearsOfExperience"
    | "cvScore" //missed from the database
    | "cvMatchPercentage" //missed from the database
    | "cvUrl" //missed from the database
    | "yearsOfExperience"
  >;
