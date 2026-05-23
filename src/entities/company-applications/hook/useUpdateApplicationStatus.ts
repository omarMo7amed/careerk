import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateApplicationStatus } from "../api/updateApplicationStatus";
import { ApplicationStatus } from "@/entities/application";
import { GetApplicationResponse } from "../type/application";

export function useUpdateApplicationStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: ApplicationStatus }) =>
      updateApplicationStatus(id, status),
    onSuccess: (_, { id, status }) => {
      queryClient
        .getQueriesData<GetApplicationResponse["data"]>({
          queryKey: ["job-applications"],
        })
        .forEach(([key, data]) => {
          if (!data) return;
          queryClient.setQueryData(key, {
            ...data,
            applications: data.applications.map((app) =>
              app.id === id ? { ...app, status } : app,
            ),
          });
        });
    },
  });
}
