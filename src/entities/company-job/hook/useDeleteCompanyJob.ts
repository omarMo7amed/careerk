import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCompanyJob } from "../api/deleteCompanyJob";
import { CompanyJob } from "../types/companyJob";

export function useDeleteCompanyJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, token }: { id: string; token: string }) =>
      deleteCompanyJob(id),

    onSuccess: (jobId) => {
      //jobId is undefined
      console.log("Deleted job with ID:", jobId);
      queryClient.setQueryData(["company-jobs"], (old: CompanyJob[]) =>
        old?.filter((job) => job.id !== jobId),
      );
    },
  });
}
