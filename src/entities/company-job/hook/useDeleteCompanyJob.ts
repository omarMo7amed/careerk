import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCompanyJob } from "../api/deleteCompanyJob";
import { CompanyJob } from "../types/companyJob";

export function useDeleteCompanyJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCompanyJob,
    onSuccess: (jobId) => {
      queryClient.setQueryData(["company-jobs"], (old: CompanyJob[]) =>
        old?.filter((job) => job.id !== jobId),
      );
    },
  });
}
