import {
  CompanyJob,
  EmploymentType,
  ExperienceLevel,
  WorkArrangement,
} from "@/entities/company-job/types/companyJob";
import { JobPostFormData } from "../lib/jobPostSchema";

export function buildNewJob(data: JobPostFormData): CompanyJob {
  return {
    id: crypto.randomUUID(),
    companyId: "1",
    title: data.title,
    description: data.description,
    requirements: data.requirements,
    employmentType: data.employmentType as EmploymentType,
    workArrangement: data.workArrangement as WorkArrangement,
    experienceLevel: data.experienceLevel as ExperienceLevel,
    responsibilities: "",
    location: data.location,
    applicationDeadline: data.applicationDeadline,
    minSalary: data.minSalary ? Number(data.minSalary) : null,
    maxSalary: data.maxSalary ? Number(data.maxSalary) : null,
    skills: data.skills.map((name, i) => ({
      id: String(i),
      name,
      category: "Other",
    })),
    status: "published",
    applicationsCount: 0,
    viewsCount: 0,
    is_featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    published_at: new Date().toISOString(),
  };
}
