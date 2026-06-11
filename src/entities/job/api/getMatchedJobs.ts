import { GetJobsOptions, JobsResponse } from "../types/job";

import { authInterceptor } from "@/shared";

export default async function getMatchedJobs(options: GetJobsOptions = {}) {
  const params = new URLSearchParams();
  if (options.page) params.set("page", String(options.page));
  if (options.limit) params.set("limit", String(options.limit));
  const search = options.search;
  if (search) params.set("search", search);
  if (options.location) params.set("location", options.location);

  if (options.jobType?.length) {
    for (const type of options.jobType) {
      params.append("jobType", type);
    }
  }

  if (options.experienceLevel?.length) {
    for (const level of options.experienceLevel) {
      params.append("experienceLevel", level);
    }
    params.append("type", "direct");
  }

  if (options.workPreference?.length) {
    for (const preference of options.workPreference) {
      params.append("workPreference", preference);
    }
    params.append("type", "direct");
  }

  if (options.source?.length) {
    for (const source of options.source) {
      params.append("source", source);
    }
  }

  const urlParams = params.toString() ? `?${params.toString()}` : "";
  const endpoint = `/job-seekers/me/matches${urlParams}`;
  console.log("Fetching matched jobs with options:", endpoint);
  const res = await authInterceptor(endpoint, {
    // signal: options.signal,
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Failed to fetch matched jobs (${res.status}) ${body}`);
  }

  const data = await res.json();

  // console.log("Raw matched jobs response:", data);

  return data as JobsResponse;
}
