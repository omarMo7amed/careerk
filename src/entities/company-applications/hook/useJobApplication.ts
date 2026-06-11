import { useQuery } from "@tanstack/react-query";
import { getJobApplication } from "../api/getJobApplication";

export function useJobApplication(id: string) {
  return useQuery({
    queryKey: ["company-application", id],
    queryFn: () => getJobApplication({ id }),
  });
}
