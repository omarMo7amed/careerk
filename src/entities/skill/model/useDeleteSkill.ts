/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSkill } from "../api/deleteSkill";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { JobSeekerSkill } from "../types/skill";

export function useDeleteSkill({
  token,
  hasProfile,
}: {
  token: string;
  hasProfile: boolean;
}) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (skillIds: string[]) => {
      if (hasProfile) {
        return deleteSkill(token, skillIds);
      }
      // If no profile, don't call API, just return void
      return Promise.resolve(undefined as any);
    },
    onSuccess: (_res, skillIds: string[]) => {
      if (hasProfile) {
        // Update jobSeeker cache
        queryClient.setQueryData(
          jobSeekerKeys.me.all,
          (old: { data?: JobSeeker } | undefined) => {
            if (!old) return old;
            const skills: JobSeekerSkill[] = (old.data?.skills || []).filter(
              (s: JobSeekerSkill) => !skillIds.includes(s.skillId!),
            );
            return { ...old, data: { ...(old.data || {}), skills } };
          },
        );
      } else {
        // Update cv-info cache
        queryClient.setQueryData(["cv-info"], (old: any | undefined) => {
          if (!old) return old;
          const skills: JobSeekerSkill[] = (old.data?.skills || []).filter(
            (s: JobSeekerSkill, index: number) =>
              !skillIds.includes(index.toString()),
          );
          return { ...old, data: { ...(old.data || {}), skills } };
        });
      }
    },
  });

  return { deleteSkill: mutate, isPending, isError };
}
