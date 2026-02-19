import { jobListings } from "../mock-data/jobs";

export async function searchJobs(signal: AbortSignal, query: string) {
  // Simulate an API call with a delay
  return jobListings;
}
