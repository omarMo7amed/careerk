import { LoginState } from "../types/loginFormTypes";
import { loginSchema } from "./loginSchema";

export async function login(
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const role = formData.get("role"); // "company" | "jobseeker"

  const parsed = loginSchema.safeParse(Object.fromEntries(formData));

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
