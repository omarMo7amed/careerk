import { CompanySize, CompanyType } from "../types/CompanyProfile";

export const companySizeLabels: Record<CompanySize, string> = {
  SIZE_1_50: "1-50",
  SIZE_51_200: "51-200",
  SIZE_201_1000: "201-1000",
  SIZE_1000_PLUS: "1000+",
};
export const companyTypeLabels: Record<CompanyType, string> = {
  STARTUP: "Start Up",
  SCALE_UP: "Scale Up",
  ENTERPRISE: "Enterprise",
  NON_PROFIT: "Non-Profit",
  GOVERNMENT: "Government",
};
