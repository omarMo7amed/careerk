import { useQuery } from "@tanstack/react-query";
import { getCompanyJobs } from "../api/getCompanyJobs";

export function useCompanyJobs() {
  return useQuery({
    queryKey: ["company-jobs"],
    queryFn: () => getCompanyJobs(),
  });
}
