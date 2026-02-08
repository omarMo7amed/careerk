"use server";

import { redirect } from "next/navigation";
import { RegisterState } from "../types/RegisterFormType";
import { registerCompanySchema, registerJobSeekerSchema } from "./helper";

export async function registerJobSeeker(
  prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const parsed = registerJobSeekerSchema.safeParse(
    Object.fromEntries(formData),
  );

  // failed
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // validated
  const data = parsed.data;

  //   const response = await fetch(
  //     "http://localhost:3000/api/v1/auth/register/job-seeker",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: data.email,
  //         password: data.password,
  //         firstName: data.firstName,
  //         lastName: data.lastName,
  //       }),
  //     },
  //   );

  //   const result = await response.json();

  //   if (!response.ok) {
  //     throw new Error(result.message);
  //   }
  //   redirect("/dashboard");

  console.log("signed up:", data);
  return {
    success: true,
    errors: {},
  };
  //   return result;
  //   Returns: { success: true, data: { email: 'user@example.com' }, message: 'Registration successful...' }
}

export async function registerCompany(
  prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const parsed = registerCompanySchema.safeParse(Object.fromEntries(formData));

  // failed
  if (!parsed.success) {
    console.log("failed", parsed.error);
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // validated
  const data = parsed.data;

  //   const response = await fetch(
  //     "http://localhost:3000/api/v1/auth/register/company",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: data.email,
  //         password: data.password,
  //         name: data.companyName,
  //         industry: data.industry,
  //         size: data.size, // 'SIZE_1_50', 'SIZE_51_200', 'SIZE_201_1000', 'SIZE_1000_PLUS'
  //         type: data.type, // 'STARTUP', 'SCALE_UP', 'ENTERPRISE', 'NON_PROFIT', 'GOVERNMENT'
  //       }),
  //     },
  //   );

  //   const result = await response.json();

  //   if (!response.ok) {
  //     throw new Error(result.message);
  //   }
  //   redirect("/dashboard");

  //   return result;

  console.log("signed up:", data);
  return {
    success: true,
    errors: {},
  };
}
