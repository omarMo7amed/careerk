import { authInterceptor } from "@/shared";

export type GetCompaniesOptions = {
  signal?: AbortSignal;
  page?: number;
  pageSize?: number;
};

export async function getCompanies(options?: GetCompaniesOptions) {
  const page = options?.page ?? 1;
  const pageSize = options?.pageSize ?? 12;

  const res = await authInterceptor(
    `/companies?page=${page}&limit=${pageSize}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch companies");

  return res.json();
}
