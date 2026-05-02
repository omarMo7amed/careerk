import { useQuery } from "@tanstack/react-query";
import {
  getCompanyJobMatches,
  GetMatchesParams,
} from "../api/getCompanyJobMatches";

export function useCompanyJobMatches(params: GetMatchesParams) {
  return useQuery({
    queryKey: ["company-job-matches", params],
    queryFn: () => getCompanyJobMatches(params),
  });
}
