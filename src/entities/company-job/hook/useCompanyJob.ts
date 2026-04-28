import { useQuery } from "@tanstack/react-query";
import { getCompanyJob } from "../api/getCompanyJob";

export function useCompanyJob({ jobId }: { jobId: string }) {
  return useQuery({
    queryKey: ["company-job", jobId],
    queryFn: () => getCompanyJob(jobId),
  });
}
