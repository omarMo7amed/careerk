import { candidates } from "../mock-data/candidates";

export async function searchCandidates(signal: AbortSignal, query: string) {
  // Simulate an API call with a delay
  return candidates;
}
