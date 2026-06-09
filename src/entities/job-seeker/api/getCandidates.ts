import { JobType } from "@/entities/company-job";
import { AvailabilityStatus } from "../types/availabilityStatus";
import { authInterceptor } from "@/shared";

interface GetCandidatesOptions {
  signal?: AbortSignal;
  page?: number;
  limit?: number;
  search?: string;
  location?: string;
  workPreference?: string[];
  preferredJobTypes?: JobType[];
  availabilityStatus?: AvailabilityStatus[];
}

export async function getCandidates(options?: GetCandidatesOptions) {
  const params = new URLSearchParams();
  if (options?.page) params.set("page", String(options.page));
  if (options?.limit) params.set("limit", String(options.limit));
  if (options?.search) params.set("search", options.search);
  if (options?.location) params.set("location", options.location);

  if (options?.workPreference?.length) {
    for (const preference of options.workPreference) {
      params.append("workPreference", preference);
    }
  }

  if (options?.preferredJobTypes?.length) {
    for (const jobType of options.preferredJobTypes) {
      params.append("preferredJobTypes", jobType);
    }
  }

  if (options?.availabilityStatus?.length) {
    for (const status of options.availabilityStatus) {
      params.append("availabilityStatus", status);
    }
  }

  const url = `/job-seekers${params.toString() ? `?${params.toString()}` : ""}`;
  const res = await authInterceptor(url, {
    signal: options?.signal,
    cache: "no-store",
  });

  return res.json();
}
