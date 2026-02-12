"use server";

import { LoginState } from "../types/loginFormTypes";
import { loginSchema } from "./helper";

export async function login(
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const parsed = loginSchema.safeParse(Object.fromEntries(formData));

  // failed
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // validated
  const data = parsed.data;

  //   redirect("/dashboard");

  console.log("signed up:", data);
  return {
    success: true,
    errors: {},
  };
}
