/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../api/updateProfile";
import { jobSeekerKeys } from "../lib/queryKeys";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: updateProfile,
    onSuccess: (updated) => {
      // Surgically patch the profile sub-object inside the shared primary cache.
      // Only components whose selected slice actually changed will re-render.
      queryClient.setQueryData(jobSeekerKeys.me.all, (old: any) => {
        if (!old) return old;
        return { ...old, profile: { ...old.profile, ...updated } };
      });
    },
  });

  return {
    updateProfile: mutate,
    isPending,
    isError,
  };
}
