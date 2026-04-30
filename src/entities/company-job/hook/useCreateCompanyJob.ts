import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCompanyJob, CreateJobPayload } from "../api/createCompanyJob";
// import { JobPostFormData } from "@/features/post-job-form";

export function useCreateCompanyJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateJobPayload) => createCompanyJob(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-jobs"] });
    },
  });
}
