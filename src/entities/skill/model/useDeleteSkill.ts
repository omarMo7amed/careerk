"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSkill } from "../api/deleteSkill";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { JobSeekerSkill } from "../types/skill";

export function useDeleteSkill(token: string) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (skillIds: string[]) => deleteSkill(token, skillIds),
    onSuccess: (_res, skillIds: string[]) => {
      queryClient.setQueryData(jobSeekerKeys.me.all, (old: { data?: JobSeeker } | undefined) => {
        if (!old) return old;
        const skills: JobSeekerSkill[] = (old.data?.skills || []).filter(
          (s: JobSeekerSkill) => !skillIds.includes(s.skillId),
        );
        return { ...old, data: { ...(old.data || {}), skills } };
      });
    },
  });

  return { deleteSkill: mutate, isPending, isError };
}
