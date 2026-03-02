"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSkill } from "../api/addSkill";
import { jobSeekerKeys, JobSeeker } from "@/entities/job-seeker";
import { JobSeekerSkill } from "../types/skill";

export function useUpdateSkills() {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (skills: string[]) => addSkill(skills),
    onSuccess: (_data, skillNames: string[]) => {
      queryClient.setQueryData(jobSeekerKeys.me.all, (old: JobSeeker) => {
        if (!old) return old;
        const existingMap = new Map(old.skills.map((s) => [s.name, s]));
        const updated: JobSeekerSkill[] = skillNames.map(
          (name) => existingMap.get(name) ?? { name, verified: false },
        );
        return { ...old, skills: updated };
      });
    },
  });

  return {
    updateSkills: mutate,
    isPending,
    isError,
  };
}
