import { z } from "zod";

export const verifyEmailSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),

  code: z
    .string()
    .length(6, "Code must be exactly 6 digits")
    .regex(/^\d{6}$/, "Code must contain only numbers"),
});

export type VerifyEmailFormData = z.infer<typeof verifyEmailSchema>;

export const resendOtpSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

export type ResendOtpFormData = z.infer<typeof resendOtpSchema>;
