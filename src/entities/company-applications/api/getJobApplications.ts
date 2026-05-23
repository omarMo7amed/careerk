import { ApplicationStatus } from "@/entities/application";
import { GetApplicationResponse } from "../type/application";

export interface GetApplicationsParams {
  jobId?: string;
  page?: number;
  limit?: number;
  status?: ApplicationStatus;
  token: string;
}

export async function getJobApplications({
  jobId,
  page = 1,
  limit = 10,
  status,
  token,
}: GetApplicationsParams): Promise<GetApplicationResponse["data"]> {
  const params = new URLSearchParams();
  params.set("page", String(page));
  params.set("limit", String(limit));
  if (jobId) params.set("jobId", jobId);
  if (status) params.set("status", status);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/companies/me/applications?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch applications");
  }

  const data: GetApplicationResponse = await res.json();

  return data.data;
}
