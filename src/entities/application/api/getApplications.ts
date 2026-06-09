import { ApplicationDetailsResponse } from "..";
import { authInterceptor } from "@/shared";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000/api/v1";
interface GetApplicationsOptions {
  signal?: AbortSignal;
  search?: string;
  location?: string;
  status?: string[];
  dateApplied?: string[];
  workPreference?: string[];
  page?: number;
  limit?: number;
}

export async function getApplications({
  signal,
  search,
  location,
  status,
  dateApplied,
  workPreference,
  page = 1,
  limit = 12,
}: GetApplicationsOptions = {}) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (search) {
    params.set("search", search);
  }

  if (location) {
    params.set("location", location);
  }

  if (status) {
    for (const value of status) {
      params.append("status", value);
    }
  }

  if (dateApplied) {
    for (const value of dateApplied) {
      params.append("dateApplied", value);
    }
  }

  if (workPreference) {
    for (const value of workPreference) {
      params.append("workPreference", value);
    }
  }

  const response = await authInterceptor(
    `/job-seekers/me/applications?${params.toString()}`,
    {
      method: "GET",
      signal,
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch applications");
  }

  const data = await response.json();
  return data;
}

export async function getApplicationDetails(
  id: string,
): Promise<ApplicationDetailsResponse> {
  const response = await authInterceptor(`${API_BASE_URL}/applications/${id}`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch application details");
  }

  const data = await response.json();
  return data;
}
