import { authInterceptor, handleApiError } from "@/shared";
import { GetJobApplicationResponse } from "../type/application";

export interface GetJobApplicationParams {
  id: string;
}

export async function getJobApplication({
  id,
}: GetJobApplicationParams): Promise<GetJobApplicationResponse["data"]> {
  const res = await authInterceptor(`/companies/me/applications/${id}`, {
    method: "GET",
  });

  if (!res.ok) {
    await handleApiError(res, "Failed to fetch job application details");
  }
  const data: GetJobApplicationResponse = await res.json();

  return data.data;
}
