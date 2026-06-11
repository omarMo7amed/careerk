import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCompanyJob, CreateJobPayload } from "../api/createCompanyJob";
import { CompanyJob } from "../types/companyJob";
import toast from "react-hot-toast";

export function useCreateCompanyJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ payload }: { payload: CreateJobPayload }) => {
      console.log("useCreateCompanyJob - payload:", payload);

      return createCompanyJob(payload);
    },
    onSuccess: (newJob) => {
      queryClient.setQueryData(["company-jobs"], (old: CompanyJob[]) => [
        newJob,
        ...(old || []),
      ]);
      toast.success("Company job created successfully!");
    },

    onError: (error) => {
      toast.error("Error creating company job:");
    },
  });
}
