import { useQuery } from "@tanstack/react-query";
import { getDirectJobById } from "../api/getDirectJobById";

export function useGetDirectJobByID(jobId: string) {
  const { data: job, isLoading } = useQuery({
    queryKey: ["direct-job", jobId],
    queryFn: () => getDirectJobById(jobId),
  });
  return { job, isLoading };
}
