import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCompanyJob } from "../api/deleteCompanyJob";
import { toast } from "react-hot-toast";

export function useDeleteCompanyJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: string }) => deleteCompanyJob(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-jobs"] });
      toast.success("Company job deleted successfully!");
    },

    onError: (error) => {
      toast.error("Error deleting company job: " + error.message);
    },
  });
}
