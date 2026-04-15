import { CompanyProfile } from "../types/CompanyProfile";

export async function updateCompanyProfile(
  data: Partial<CompanyProfile>,
): Promise<Partial<CompanyProfile>> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return data;
}
