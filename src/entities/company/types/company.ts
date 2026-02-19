export interface Company {
  id: string;
  name: string;
  logo?: string;
  website?: string;
  size?: string;
  industry: string;
  location: string;
}
export interface CompanyCard extends Company {
  description: string;
  founded_year: number;
}
