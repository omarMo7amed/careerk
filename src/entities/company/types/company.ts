export interface CompanyCard {
  id: string;
  name: string;
  description: string;
  logoUrl?: string;
  websiteUrl?: string;
  industry: string;
  size?: string;
  type?: string;
  headquartersLocation: string;
  foundedYear: number;
  benefits?: string;
  linkedIn?: string;
  facebook?: string;
  twitter?: string;
}

export type Company = CompanyCard;
