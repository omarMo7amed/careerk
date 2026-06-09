import { GetCompanyJobResponse } from "../types/companyJob";
import { AvailabilityStatus, JobMatchesData } from "../types/companyJob";
import { authInterceptor } from "@/shared";

export interface GetMatchesParams {
  jobId: string;
  page?: number;
  limit?: number;
  minScore?: number;
  availabilityStatus?: AvailabilityStatus;
}

export async function getCompanyJobMatches({
  jobId,
  page = 1,
  limit = 10,
  minScore,
  availabilityStatus,
}: GetMatchesParams): Promise<JobMatchesData> {
  const params = new URLSearchParams();
  params.set("page", String(page));
  params.set("limit", String(limit));

  if (minScore !== undefined) params.set("minScore", String(minScore));
  if (availabilityStatus) params.set("availabilityStatus", availabilityStatus);

  const res = await authInterceptor(
    `/companies/me/jobs/${jobId}/matches?${params.toString()}`,
    {
      method: "GET"
    },
  );

  const json: GetCompanyJobResponse<JobMatchesData> = await res.json();

  if (!res.ok) {
    throw new Error(json?.message || "Failed to fetch matches");
  }

  return json.data;
}
