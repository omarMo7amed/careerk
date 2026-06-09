/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../api/updateProfile";
import { jobSeekerKeys } from "../lib/queryKeys";
import { usePathname } from "next/navigation";

export function useUpdateProfile({ hasCVInfo }: { hasCVInfo: boolean }) {
  const queryClient = useQueryClient();
  const isProfilePage = Boolean(usePathname().match("profile"));

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (payload: any) => {
      if (
        !hasCVInfo ||
        payload.profileImageUrl ||
        payload.firstName ||
        payload.lastName ||
        isProfilePage
      ) {
        return updateProfile(payload);
      }
      return Promise.resolve({ data: payload });
    },
    onSuccess: (data: any) => {
      if (!hasCVInfo || isProfilePage) {
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
      } else {
        queryClient.setQueryData(["cv-info"], (old: any) => {
          if (!old) return old;
          if (data.data.firstName || data.data.lastName) {
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
      }
    },
  });

  return {
    updateProfile: mutate,
    isPending,
    isError,
  };
}
