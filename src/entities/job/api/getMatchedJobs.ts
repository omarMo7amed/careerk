import { GetJobsOptions, JobsResponse } from "../types/job";

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
  }

  if (options.workPreference?.length) {
    for (const preference of options.workPreference) {
      params.append("workPreference", preference);
    }
  }

  if (options.jobSource?.length) {
    for (const source of options.jobSource) {
      params.append("jobSource", source);
    }
  }

  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/me/matches${params.toString() ? `?${params.toString()}` : ""}`;
  const res = await fetch(url, {
    signal: options.signal,
    cache: "no-store",
    headers: {
      // Authorization: `Bearer ${options.token ?? ""}`,
    },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Failed to fetch matched jobs (${res.status}) ${body}`);
  }

  return (await res.json()) as JobsResponse;
}
