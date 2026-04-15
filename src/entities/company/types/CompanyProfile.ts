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
