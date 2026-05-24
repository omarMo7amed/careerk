import { RegisterState } from "../types/RegisterFormType";
import { registerCompanySchema } from "./registerCompanySchema";
import { registerJobSeekerSchema } from "./registerJobseekerSchema";

export async function registerValidation(
  prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const role = formData.get("role");

  let parsed;

  if (role === "company") {
    parsed = registerCompanySchema.safeParse(Object.fromEntries(formData));
  } else {
    parsed = registerJobSeekerSchema.safeParse(Object.fromEntries(formData));
  }

  // failed
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // validated
  console.log("signed up:", parsed.data);
  return {
    success: true,
    errors: {},
  };
}
