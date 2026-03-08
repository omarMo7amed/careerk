import { useQuery } from "@tanstack/react-query";
import { getApplicationsByJobId } from "../api/getApplicationsByJobId";

export function useApplicationsByJobId(jobId: string | undefined) {
  return useQuery({
    queryKey: ["applications", jobId],
    queryFn: () => getApplicationsByJobId(jobId as string),
    enabled: !!jobId,
  });
}
