import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCompanyJob } from "../api/updateCompanyJob";
import { CompanyJob } from "../types/companyJob";

export function useUpdateCompanyJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      jobId,
      data,
      token,
    }: {
      jobId: string;
      data: Partial<CompanyJob>;
      token: string;
    }) => updateCompanyJob(jobId, data, token),

    onSuccess: (updatedJob, variables) => {
      const { jobId } = variables;

      queryClient.setQueryData(["company-job", jobId], updatedJob);

      queryClient.setQueryData(["company-jobs"], (old: CompanyJob[]) =>
        old?.map((job) => (job.id === jobId ? updatedJob : job)),
      );
    },
  });
}
