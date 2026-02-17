import { RegisterState } from "../types/RegisterFormType";
import { registerCompanySchema } from "./registerCompanySchema";
import { registerJobSeekerSchema } from "./registerJobseekerSchema";

export async function registerJobSeeker(
  prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const role = formData.get("role");

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
  const data = { ...parsed.data, role };

  console.log("signed up:", data);
  return {
    success: true,
    errors: {},
  };
}

export async function registerCompany(
  prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const role = formData.get("role");

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
  const data = { ...parsed.data, role };

  console.log("signed up:", data);
  return {
    success: true,
    errors: {},
  };
}
