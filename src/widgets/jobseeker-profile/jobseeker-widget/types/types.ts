import { Education } from "@/entities/education";
import { WorkExperience } from "@/entities/experience";
import { JobSeekerProfile } from "@/entities/job-seeker";

export interface ExperienceSectionProps {
  workExperiences: WorkExperience[];
}

export interface LinksPortfolioProps {
  profile: Pick<JobSeekerProfile, "linkedinUrl" | "githubUrl" | "portfolioUrl">;
}

export interface LinkRowProps {
  icon: React.ReactNode;
  label: string;
  url: string | null | undefined;
  iconColor?: string;
}

export interface ProfileStatusProps {
  profile: Pick<
    JobSeekerProfile,
    | "availabilityStatus"
    | "workPreference"
    | "preferredJobTypes"
    | "expectedSalary"
    | "noticePeriod"
  >;
}

export interface ContactInfoProps {
  profile: Pick<
    JobSeekerProfile,
    "phone" | "cvEmail" | "location" | "noticePeriod"
  >;
}

export interface EducationSectionProps {
  educations: Education[];
}
