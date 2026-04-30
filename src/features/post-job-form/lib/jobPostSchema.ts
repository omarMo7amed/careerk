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

    jobType: z
      .enum(["FULL_TIME", "PART_TIME", "CONTRACT", "FREELANCE", "INTERNSHIP"])
      .default("FULL_TIME"),

    workPreference: z
      .enum(["ONSITE", "REMOTE", "HYBRID", "ANY"])
      .default("ONSITE"),

    experienceLevel: z
      .enum(["ENTRY", "JUNIOR", "MID", "SENIOR", "LEAD", "MANAGER"])
      .default("ENTRY"),
    status: z.enum(["DRAFT", "PUBLISHED", "PAUSED", "CLOSED"]).default("DRAFT"),

    salaryMin: salaryField,
    salaryMax: salaryField,

    location: z.string().optional(),

    deadline: z
      .string()
      .optional()
      .refine((val) => {
        if (!val) return true;

        const date = new Date(val);
        if (isNaN(date.getTime())) return false;

        return date >= new Date();
      }, "Deadline must be a valid future date"),

    skillNames: z
      .array(z.string().min(1, "Skill name is required"))
      .min(1, "Please add at least one skill")
      .max(20),
  })
  .refine(
    (data) => {
      const min = data.salaryMin?.trim();
      const max = data.salaryMax?.trim();
      if (min && max) return Number(min) <= Number(max);
      return true;
    },
    { message: "Minimum salary cannot exceed maximum", path: ["salaryMax"] },
  );

export type JobPostFormData = z.input<typeof jobPostSchema>;
