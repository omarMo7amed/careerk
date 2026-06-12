/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSkill } from "../api/deleteSkill";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { JobSeekerSkill } from "../types/skill";
import { useCVInfo } from "@/entities/cv";
import { usePathname } from "next/navigation";

export function useDeleteSkill() {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const isCvPage = pathname.includes("/dashboard/jobseeker/cv-management");
  const { isUpdatePending, isFirstUpload } = useCVInfo();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (skillIds: string[]) => {
      if ((isCvPage && isUpdatePending) || isFirstUpload) {
        return Promise.resolve(undefined as any);
      }
      // If no profile, don't call API, just return void
      return deleteSkill(skillIds);
    },
    onSuccess: (_res, skillIds: string[]) => {
      if (!((isCvPage && isUpdatePending) || isFirstUpload)) {
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
