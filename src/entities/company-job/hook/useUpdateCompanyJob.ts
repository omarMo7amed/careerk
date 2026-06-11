import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCompanyJob } from "../api/updateCompanyJob";
import { CompanyJob } from "../types/companyJob";
import { toast } from "react-hot-toast";

export function useUpdateCompanyJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      jobId,
      data,
    }: {
      jobId: string;
      data: Partial<CompanyJob>;
    }) => {
      console.log("useUpdateCompanyJob - jobId:", "data:", data);
      return updateCompanyJob(jobId, data);
    },

    onSuccess: (updatedJob, variables) => {
      const { jobId } = variables;

      queryClient.setQueryData(["company-job", jobId], updatedJob);

      queryClient.setQueryData(["company-jobs"], (old: CompanyJob[]) =>
        old?.map((job) => (job.id === jobId ? updatedJob : job)),
      );

      toast.success("Company job updated successfully!");
    },
    onError: (error) => {
      toast.error("Error updating company job");
    },
  });
}
