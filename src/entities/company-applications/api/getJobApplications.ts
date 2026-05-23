import { ApplicationStatus } from "@/entities/application";
import { axiosInstance } from "@/shared/api/axiosInstance";
import { GetApplicationResponse } from "../type/application";

export interface GetApplicationsParams {
  jobId?: string;
  page?: number;
  limit?: number;
  status?: ApplicationStatus;
}

export async function getJobApplications({
  jobId,
  page = 1,
  limit = 10,
  status,
}: GetApplicationsParams): Promise<GetApplicationResponse["data"]> {
  const params = new URLSearchParams();
  params.set("page", String(page));
  params.set("limit", String(limit));
  if (jobId) params.set("jobId", jobId);
  if (status) params.set("status", status);

  const { data } = await axiosInstance.get<GetApplicationResponse>(
    `/company-applications?${params.toString()}`,
  );
  return data.data;
}
