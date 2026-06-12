/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSkill } from "../api/addSkill";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { JobSeekerSkill } from "../types/skill";
import { useCVInfo } from "@/entities/cv/model/useCv";
import { usePathname } from "next/dist/client/components/navigation";

type AddSkillResponse = {
  data: JobSeekerSkill[];
};

export function useAddSkills() {
  const pathname = usePathname();
  const isCvPage = pathname.includes("/dashboard/jobseeker/cv-management");

  const { isUpdatePending, isFirstUpload } = useCVInfo();
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (skills: string[]) => {
      if ((isCvPage && isUpdatePending) || isFirstUpload) {
        return Promise.resolve({ data: skills });
      }
      return addSkill(skills);
    },
    onSuccess: (data: AddSkillResponse) => {
      if (!((isCvPage && isUpdatePending) || isFirstUpload)) {
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
            verified: false,
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
