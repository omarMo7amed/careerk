import { useQuery } from "@tanstack/react-query";
import { getApplicationDetails } from "../api/getApplications";

export function useApplication(id: string) {
  const {
    data: details,
    isPending,
    error,
  } = useQuery({
    queryKey: ["application", id],
    queryFn: () => getApplicationDetails(id),
    enabled: !!id,
  });
  return { details, isLoading: isPending, error: error ?? null };
}
