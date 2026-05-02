import { axiosInstance } from "@/shared/api/axiosInstance";
import { GetCompanyJobResponse } from "../types/companyJob";
import { AvailabilityStatus, JobMatchesData } from "../types/companyJob";

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

  const { data } = await axiosInstance.get<
    GetCompanyJobResponse<JobMatchesData>
  >(`/company-jobs/${jobId}/matches?${params.toString()}`);
  return data.data;
}
