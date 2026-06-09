import {
  CompanyProfile,
  UpdateCompanyProfileResponse,
} from "../types/CompanyProfile";
import { authInterceptor } from "@/shared";

const BASE_API_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000/api/v1";
export async function updateCompanyProfile(
  id: string,
  data: Partial<CompanyProfile>,
): Promise<UpdateCompanyProfileResponse> {
  const response = await authInterceptor(`/companies/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(
      result.error?.message || "Failed to update company profile",
    );
  }
  return result;
}
