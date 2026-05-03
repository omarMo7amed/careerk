"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSkill } from "../api/addSkill";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { JobSeekerSkill } from "../types/skill";

type AddSkillResponse = {
  data: JobSeekerSkill[];
};

export function useAddSkills({ token }: { token: string }) {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (skills: string[]) => addSkill(token, skills),
    onSuccess: (data: AddSkillResponse) => {
      queryClient.setQueryData(jobSeekerKeys.me.all, (old: { data?: JobSeeker } | undefined) => {
        if (!old) return old;

        const previousSkills = old.data?.skills || [];
        const nextSkills = [...previousSkills, ...(data.data || [])];

        return {
          ...old,
          data: { ...(old.data || {}), skills: nextSkills },
        };
      });
    },
  });

  return {
    addSkills: mutate,
    isPending,
    isError,
  };
}
