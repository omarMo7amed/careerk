import { Errors, FormData } from "../types/formTypes";

export function validateForm(
  formData: FormData,
  setErrors: React.Dispatch<React.SetStateAction<Errors>>,
): boolean {
  const newErrors = { email: "", password: "" };
  let isValid = true;

  if (!formData.email) {
    newErrors.email = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Enter a valid email address";
    isValid = false;
  }

  if (!formData.password) {
    newErrors.password = "Password is required";
    isValid = false;
  } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
}
