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
    jobTitle: z
      .string()
      .min(3, "Job title must be at least 3 characters")
      .max(100, "Job title must be under 100 characters"),

    jobDescription: z
      .string()
      .min(50, "Description must be at least 50 characters")
      .max(5000, "Description must be under 5000 characters"),

    requirements: z
      .string()
      .min(20, "Requirements must be at least 20 characters")
      .max(5000, "Requirements must be under 5000 characters"),

    employmentType: z.string(),
    workArrangement: z.string(),
    experienceLevel: z.string(),

    salaryMin: salaryField,
    salaryMax: salaryField,

    location: z
      .string()
      .min(2, "Location must be at least 2 characters")
      .max(100, "Location must be under 100 characters"),

    deadline: z
      .string()
      .min(1, "Please select a deadline")
      .refine(
        (val) => new Date(val) > new Date(),
        "Deadline must be in the future",
      ),

    skills: z
      .array(z.string())
      .min(1, "Please add at least one skill")
      .max(20, "Maximum 20 skills allowed"),
  })
  .refine(
    (data) => {
      const min = data.salaryMin?.trim();
      const max = data.salaryMax?.trim();

      // Only compare when both fields have actual values
      if (min && max) {
        return Number(min) <= Number(max);
      }
      return true;
    },
    { message: "Minimum salary cannot exceed maximum", path: ["salaryMax"] },
  );

export type JobPostFormData = z.input<typeof jobPostSchema>;
