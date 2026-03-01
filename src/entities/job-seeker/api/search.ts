import { allJobSeekers } from "../mock-data/allJobSeekers";

export async function searchCandidates(signal: AbortSignal, query: string) {
  // Simulate an API call with a delay
  return allJobSeekers;
}
