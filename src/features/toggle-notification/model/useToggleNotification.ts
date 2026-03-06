"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleNotification, UpdateNotificationRequest } from "..";

export function useToggleNotification() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: UpdateNotificationRequest) =>
      toggleNotification(request),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notificationPreferences"],
      });
    },
    onError: (error) => {
      console.error("Toggle notification error:", error);
    },
  });
}
