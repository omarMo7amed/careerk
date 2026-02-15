import { jobListings } from "../mock-data/jobs";

export type GetJobsOptions = {
  signal?: AbortSignal;
  page?: number;
  pageSize?: number;
  q?: string;
  location?: string;
};

export default async function getJobs(options?: GetJobsOptions) {
  // const base = process.env.NEXT_PUBLIC_BASE_API_URL;
  // if (base) {
  //   const params = new URLSearchParams();
  //   if (options?.page) params.set("page", String(options.page));
  //   if (options?.pageSize) params.set("pageSize", String(options.pageSize));
  //   if (options?.q) params.set("q", options.q);
  //   if (options?.location) params.set("location", options.location);

  //   const url = `${base}/jobs${params.toString() ? `?${params.toString()}` : ""}`;
  //   const res = await fetch(url, { signal: options?.signal });

  //   if (!res.ok) {
  //     const body = await res.text().catch(() => "");
  //     throw new Error(`Failed to fetch jobs (${res.status}) ${body}`);
  //   }

  //   return res.json();
  // }

  // fallback to mock data while backend isn't available
  return jobListings;
}
