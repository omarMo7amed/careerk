"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNotificationPreference } from "../api/updateNotificationPreference";
import type { UpdateNotificationPreferenceDto } from "../types/updateNotificationPreference";

export function useUpdateNotificationPreference() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (dto: UpdateNotificationPreferenceDto) =>
      updateNotificationPreference(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSettings"] });
    },
  });

  return {
    updatePreferences: mutate,
    isPending,
    isError,
  };
}
