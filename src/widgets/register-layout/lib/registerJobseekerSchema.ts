import { z } from "zod";
export const registerJobSeekerSchema = z.object({
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
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});
