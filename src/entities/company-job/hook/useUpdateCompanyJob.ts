import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCompanyJob } from "../api/updateCompanyJob";
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
    }) => updateCompanyJob(jobId, data),

    onSuccess: (updatedJob, variables) => {
      const { jobId } = variables;

      queryClient.setQueryData(["company-job", jobId], updatedJob);

      queryClient.invalidateQueries({ queryKey: ["company-jobs"] });
    },
  });
}
