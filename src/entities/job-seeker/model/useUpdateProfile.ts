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
        !hasCVInfo &&
        (payload.profileImageUrl || payload.firstName || payload.lastName) &&
        isProfilePage
      ) {
        return updateProfile(payload);
      }
      return Promise.resolve({ data: payload });
    },
    onSuccess: (data: any) => {
      const payload = data?.data;
      if (!payload) return;

      if (!hasCVInfo || isProfilePage) {
        queryClient.setQueryData(jobSeekerKeys.me.all, (old: any) => {
          if (!old) return old;

          if (
            payload.firstName ||
            payload.lastName ||
            payload.profileImageUrl
          ) {
            return { ...old, data: { ...(old.data || {}), ...payload } };
          }

          return {
            ...old,
            data: {
              ...old.data,
              profile: { ...old.data.profile, ...payload },
            },
          };
        });

        queryClient.setQueryData(
          [...jobSeekerKeys.me.all, "overview"],
          (old: any) => {
            if (!old) return old;
            if (
              payload.firstName ||
              payload.lastName ||
              payload.profileImageUrl
            ) {
              return { ...old, data: { ...(old.data || {}), ...payload } };
            }
            return old;
          },
        );
      } else {
        queryClient.setQueryData(["cv-info"], (old: any) => {
          if (!old) return old;
          if (payload.firstName || payload.lastName) {
            return { ...old, data: { ...(old.data || {}), ...payload } };
          }
          return {
            ...old,
            data: {
              ...old.data,
              profile: { ...old.data.profile, ...payload },
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
