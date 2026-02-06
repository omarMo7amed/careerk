import { JobSeekerData, JobSeekerErrors } from "../types/RegisterFormType";

export function validateJobSeeker(
  data: JobSeekerData,
  setErrors: React.Dispatch<React.SetStateAction<JobSeekerErrors>>,
) {
  let isValid = true;

  const newErrors: JobSeekerErrors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  // First name
  if (!data.firstName.trim()) {
    newErrors.firstName = "First name is required";
    isValid = false;
  }

  // Last name
  if (!data.lastName.trim()) {
    newErrors.lastName = "Last name is required";
    isValid = false;
  }

  // Email
  if (!data.email) {
    newErrors.email = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    newErrors.email = "Enter a valid email address";
    isValid = false;
  }

  // Password
  if (!data.password) {
    newErrors.password = "Password is required";
    isValid = false;
  } else if (data.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
}
