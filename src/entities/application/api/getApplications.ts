import { ApplicationDetailsResponse, ApplicationStatus } from "..";
import {
  mockApplicationDetails,
  mockApplicationsResponse,
} from "../mock-data/applications";

interface GetApplicationsOptions {
  signal?: AbortSignal;
  status?: ApplicationStatus;
  page?: number;
  limit?: number;
}

export async function getApplications({
  signal,
  status,
  page = 1,
  limit = 12,
}: GetApplicationsOptions = {}) {
  const applications = mockApplicationsResponse.data.applications;

  return {
    ...mockApplicationsResponse,
    data: {
      ...mockApplicationsResponse.data,
      applications,
      total: applications.length,
    },
  };
}

export async function getApplicationDetails(
  id: string,
): Promise<ApplicationDetailsResponse> {
  const details = mockApplicationDetails[id];
  if (!details) {
    throw new Error("Application not found");
  }
  return details;
}
