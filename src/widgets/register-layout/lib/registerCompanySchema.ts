import { z } from "zod";

export const registerCompanySchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Invalid email address" })
    .trim(),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
  companyName: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Industry is required"),
  size: z.string(),
  type: z.string(),
});
