import { CompanyData, CompanyErrors } from "../types/SignupFormType";

export function validateCompany(
  data: CompanyData,
  setErrors: React.Dispatch<React.SetStateAction<CompanyErrors>>,
) {
  let isValid = true;

  const newErrors: CompanyErrors = {
    companyName: "",
    email: "",
    password: "",
    industry: "",
  };

  // Company name
  if (!data.companyName.trim()) {
    newErrors.companyName = "Company name is required";
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

  // Industry
  if (!data.industry.trim()) {
    newErrors.industry = "Industry is required";
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
}
