import { useMutation, useQueryClient } from "@tanstack/react-query";
import { publishJob, pauseJob } from "../api/updateStatus";
import { toast } from "react-hot-toast";
import { CompanyJob } from "../types/companyJob";

export function usePublishJob() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (id: string) => publishJob(id),
    onSuccess: (data) => {
      queryClient.setQueryData(["company-job", data.data.id], data.data);

      queryClient.setQueryData(["company-jobs"], (old: CompanyJob[]) =>
        old?.map((job) => (job.id === data.data.id ? data.data : job)),
      );

      toast.success("Job published successfully!");
    },

    onError: (error) => {
      toast.error("Error publishing job: " + error.message);
    },
  });

  return { mutateAsync, isPending };
}

export function usePauseStatus() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (id: string) => pauseJob(id),
    onSuccess: (data) => {
      queryClient.setQueryData(["company-job", data.data.id], data.data);

      queryClient.setQueryData(["company-jobs"], (old: CompanyJob[]) =>
        old?.map((job) => (job.id === data.data.id ? data.data : job)),
      );
      toast.success("Job paused successfully!");
    },

    onError: (error) => {
      toast.error("Error pausing job: " + error.message);
    },
  });

  return { mutateAsync, isPending };
}
