/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSkill } from "../api/addSkill";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { JobSeekerSkill } from "../types/skill";

type AddSkillResponse = {
  data: JobSeekerSkill[];
};

export function useAddSkills({
  hasProfile,
  token,
}: {
  hasProfile: boolean;
  token: string;
}) {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (skills: string[]) => {
      if (hasProfile) {
        return addSkill(token, skills);
      }
      return Promise.resolve({ data: skills });
    },
    onSuccess: (data: AddSkillResponse) => {
      if (hasProfile) {
        // Update jobSeeker cache
        queryClient.setQueryData(
          jobSeekerKeys.me.all,
          (old: { data?: JobSeeker } | undefined) => {
            if (!old) return old;

            const previousSkills = old.data?.skills || [];
            const nextSkills = [...previousSkills, ...(data.data || [])];

            return {
              ...old,
              data: { ...(old.data || {}), skills: nextSkills },
            };
          },
        );
      } else {
        // Update cv-info cache
        queryClient.setQueryData(["cv-info"], (old: any | undefined) => {
          if (!old) return old;

          const skills = data.data.map((name) => ({
            name,
            verified: true,
          }));

          const previousSkills = old.data?.skills || [];
          const nextSkills = [...previousSkills, ...(skills || [])];

          return {
            ...old,
            data: { ...(old.data || {}), skills: nextSkills },
          };
        });
      }
    },
  });

  return {
    addSkills: mutate,
    isPending,
    isError,
  };
}
