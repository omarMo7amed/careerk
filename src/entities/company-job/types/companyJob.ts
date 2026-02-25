export type Skill = {
  id: string;
  name: string;
  category: string;
};

export type EmploymentType =
  | "full_time"
  | "part_time"
  | "contract"
  | "temporary"
  | "internship";

export type WorkArrangement = "remote" | "hybrid" | "onsite";

export type ExperienceLevel =
  | "entry"
  | "junior"
  | "mid"
  | "senior"
  | "lead"
  | "executive";

export type JobStatus = "draft" | "published" | "paused" | "closed" | "filled";

export interface CompanyJob {
  id: string;
  companyId: string;
  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  employmentType: EmploymentType;
  workArrangement: WorkArrangement;
  skills: Skill[];
  location: string;
  minSalary: number | null;
  maxSalary: number | null;
  experienceLevel: ExperienceLevel;
  applicationDeadline: string;
  status: JobStatus;
  applicationsCount: number;
  viewsCount: number;
  is_featured: boolean | null;
  created_at: string | null;
  updated_at: string | null;
  published_at: string | null;
}
