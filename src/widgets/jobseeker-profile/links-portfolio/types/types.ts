import type { JobSeekerProfile } from "@/entities/job-seeker";

export type LinksPortfolioData = Pick<
  JobSeekerProfile,
  "linkedinUrl" | "githubUrl" | "portfolioUrl"
>;

export interface LinkRowProps {
  icon: React.ReactNode;
  label: string;
  url: string | null | undefined;
  iconColor?: string;
}
