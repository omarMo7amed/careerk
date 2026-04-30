import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCompanyJob } from "../api/createCompanyJob";
import { JobPostFormData } from "@/features/post-job-form";

export function useCreateCompanyJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: JobPostFormData) => createCompanyJob(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-jobs"] });
    },
  });
}
