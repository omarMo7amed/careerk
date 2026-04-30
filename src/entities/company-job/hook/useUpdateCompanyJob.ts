import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateJob } from "../api/updateJob";
import { CompanyJob } from "../types/companyJob";

export function useUpdateCompanyJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      jobId,
      data,
    }: {
      jobId: string;
      data: Partial<CompanyJob>;
    }) => updateJob(jobId, data),

    onSuccess: (updatedJob, variables) => {
      const { jobId } = variables;

      queryClient.setQueryData(["company-job", jobId], updatedJob);

      queryClient.invalidateQueries({ queryKey: ["company-jobs"] });
    },
  });
}
