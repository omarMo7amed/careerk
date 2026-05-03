/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../api/updateProfile";
import { jobSeekerKeys } from "../lib/queryKeys";

export function useUpdateProfile({ token }: { token: string }) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (payload: any) => updateProfile(token, payload),
    onSuccess: (data: any) => {
      queryClient.setQueryData(jobSeekerKeys.me.all, (old: any) => {
        if (!old) return old;
        if (
          data.data.firstName ||
          data.data.lastName ||
          data.data.profileImageUrl
        ) {
          return { ...old, data: { ...(old.data || {}), ...data.data } };
        }
        return {
          ...old,
          data: {
            ...old.data,
            profile: { ...old.data.profile, ...data.data },
          },
        };
      });
    },
  });

  return {
    updateProfile: mutate,
    isPending,
    isError,
  };
}
