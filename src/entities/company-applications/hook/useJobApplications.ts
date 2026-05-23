import { useQuery } from "@tanstack/react-query";
import {
  GetApplicationsParams,
  getJobApplications,
} from "../api/getJobApplications";

export function useJobApplications(params: GetApplicationsParams = {}) {
  return useQuery({
    queryKey: ["company-applications", params],
    queryFn: () => getJobApplications(params),
  });
}
