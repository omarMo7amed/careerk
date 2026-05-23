import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateApplicationStatus } from "../api/updateApplicationStatus";
import { ApplicationStatus } from "@/entities/application";
import { GetApplicationResponse } from "../type/application";

export function useUpdateApplicationStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
      token,
    }: {
      id: string;
      status: ApplicationStatus;
      token: string;
    }) => updateApplicationStatus(id, status, token),

    onSuccess: (_, { id, status }) => {
      queryClient
        .getQueriesData<GetApplicationResponse["data"]>({
          queryKey: ["company-applications"],
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
