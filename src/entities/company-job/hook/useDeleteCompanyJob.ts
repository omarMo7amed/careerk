import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCompanyJob } from "../api/deleteCompanyJob";

export function useDeleteCompanyJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCompanyJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-jobs"] });
    },
  });
}
