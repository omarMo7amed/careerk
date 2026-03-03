import { Company } from "@/entities/company";
import { SkillType } from "@/entities/skill";

export interface Job {
  id: string;
  type: "direct" | "scraped";
  title: string;
  description: string;
  company: Company;
  location: string;
  workArrangement: "remote" | "hybrid" | "onsite";
  employmentType?: "full-time" | "part-time" | "contract" | "internship";
  experienceLevel: "entry" | "mid" | "senior" | "lead";
  salaryMin?: number;
  salaryMax?: number;
  skills: SkillType[];
  publishedAt: string;
  applicationDeadline?: string | null;
  viewsCount: number;
  applicationsCount: number;
  status: "published" | "draft" | "closed";
  isFeatured: boolean;
  url?: string | null;
  job_matched_score?: number; // For job matching algorithm

  // For display purposes (legacy support)
  category?: string;
  salary?: string;
  source?: string;
  sourceColor?: string;
  postedDate?: string;
  applicants?: number;
}
