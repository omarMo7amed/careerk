import { mockBookmarksResponse } from "../mock-data/savedJobs";
import { Job } from "../types/BoomarkedJob";
interface GetBookmarkedJobsOptions {
  signal?: AbortSignal;
  page?: number;
  pageSize?: number;
}
export async function getBookmarkedJobs(
  options?: GetBookmarkedJobsOptions,
): Promise<Job[]> {
  const allJobs = mockBookmarksResponse.data.map((b) => b.job);

  const page = options?.page || 1;
  const pageSize = options?.pageSize || 12;

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return allJobs.slice(start, end);
}
