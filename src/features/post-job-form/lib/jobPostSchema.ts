// features/post-job-form/lib/jobPostSchema.ts
import z from "zod";

const salaryField = z
  .string()
  .optional()
  .refine(
    (val) => !val || (!isNaN(Number(val)) && Number(val) >= 0),
    "Must be a valid positive number",
  );

export const jobPostSchema = z
  .object({
    title: z
      .string()
      .min(3, "Job title must be at least 3 characters")
      .max(100),

    description: z
      .string()
      .min(50, "Description must be at least 50 characters")
      .max(5000),

    requirements: z
      .string()
      .min(20, "Requirements must be at least 20 characters")
      .max(5000),

    employmentType: z.string(),
    workArrangement: z.string(),
    experienceLevel: z.string(),

    minSalary: salaryField,
    maxSalary: salaryField,

    location: z.string().min(2).max(100),

    applicationDeadline: z
      .string()
      .min(1, "Please select a deadline")
      .refine(
        (val) => new Date(val) > new Date(),
        "Deadline must be in the future",
      ),

    skills: z.array(z.string()).min(1, "Please add at least one skill").max(20),
  })
  .refine(
    (data) => {
      const min = data.minSalary?.trim();
      const max = data.maxSalary?.trim();
      if (min && max) return Number(min) <= Number(max);
      return true;
    },
    { message: "Minimum salary cannot exceed maximum", path: ["maxSalary"] },
  );

export type JobPostFormData = z.input<typeof jobPostSchema>;
