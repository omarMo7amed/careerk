const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000/api/v1";
interface GetBookmarkedJobsOptions {
  signal?: AbortSignal;
  page?: number;
  limit?: number;
  search?: string;
  location?: string;
  jobType?: string[];
  jobSource?: string[];
}
export async function getBookmarkedJobs(options?: GetBookmarkedJobsOptions) {
  const page = options?.page || 1;
  const limit = options?.limit || 10;
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });
  if (options?.search) {
    params.set("search", options.search);
  }
  if (options?.location) {
    params.set("location", options.location);
  }
  if (options?.jobType) {
    for (const type of options.jobType) {
      params.append("jobType", type);
    }
  }
  if (options?.jobSource) {
    for (const source of options.jobSource) {
      params.append("jobSource", source);
    }
  }
  const res = await fetch(
    `${API_BASE_URL}/jobs/bookmark?${params.toString()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch bookmarked jobs");
  }
  const data = await res.json();
  console.log(data);
  return data;
}
