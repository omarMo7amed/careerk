import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCompanyJob, CreateJobPayload } from "../api/createCompanyJob";
import { CompanyJob } from "../types/companyJob";

export function useCreateCompanyJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      payload,
      token,
    }: {
      payload: CreateJobPayload;
      token: string;
    }) => createCompanyJob(payload),
    onSuccess: (newJob) => {
      queryClient.setQueryData(["company-jobs"], (old: CompanyJob[]) => [
        newJob,
        ...(old || []),
      ]);
    },
  });
}
