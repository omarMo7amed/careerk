export type CompanySize =
  | "SIZE_1_50"
  | "SIZE_51_200"
  | "SIZE_201_1000"
  | "SIZE_1000_PLUS";

export type CompanyType =
  | "STARTUP"
  | "SCALE_UP"
  | "ENTERPRISE"
  | "NON_PROFIT"
  | "GOVERNMENT";

export type CompanyProfile = {
  id: string; // souaaaaaaaaaaaaaaad
  name: string;
  description: string;
  websiteUrl: string;
  phone: string;
  logoUrl: string;
  coverUrl: string;
  industry: string;
  size: CompanySize;
  type: CompanyType;
  headquartersLocation: string;
  foundedYear: number;
  benefits: string;
  linkedIn: string;
  facebook: string;
  twitter: string;
};

export type CompanyProfileResponse = {
  success: boolean;
  data: CompanyProfile;
  message: string;
  meta: {
    timestamp: string;
    path: string;
    method: string;
  };
};
// Error Response
export interface UpdateCompanyProfileErrorResponse {
  success: false;
  error: {
    message: string | string[];
    statusCode: number;
    timestamp: string;
    path: string;
    method: string;
    details: string;
  };
}

export type UpdateCompanyProfileResponse =
  | CompanyProfileResponse
  | UpdateCompanyProfileErrorResponse;
