import { CompaniesListing } from "../mock-data/companies";

export type GetCompaniesOptions = {
  signal?: AbortSignal;
  page?: number;
  pageSize?: number;
};
export function getCompanies(options?: GetCompaniesOptions) {
  const page = options?.page || 1;
  const pageSize = options?.pageSize || 12;

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return CompaniesListing.slice(start, end);
}
