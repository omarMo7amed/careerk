/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEducation } from "../api/updateEducation";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { Education } from "../types/types";

type JobSeekerCache = {
  data?: JobSeeker;
};

export function useUpdateEducation({
  token,
  hasProfile,
}: {
  token: string;
  hasProfile: boolean;
}) {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending, isError } = useMutation({
    mutationFn: ({ id, patch }: { id: string; patch: Partial<Education> }) => {
      if (hasProfile) {
        return updateEducation(token, id, patch);
      }
      // If no profile, don't call API, just return the patch
      return Promise.resolve({ id, ...patch } as Education);
    },
    onSuccess: (updated: Education) => {
      if (hasProfile) {
        // Update jobSeeker cache
        queryClient.setQueryData(
          jobSeekerKeys.me.all,
          (old: JobSeekerCache | undefined) => {
            if (!old) return old;
            const educations = (old.data?.educations || []).map((education) =>
              education.id === updated.id
                ? { ...education, ...updated }
                : education,
            );
            return { ...old, data: { ...(old.data || {}), educations } };
          },
        );
      } else {
        // Update cv-info cache
        queryClient.setQueryData(["cv-info"], (old: any | undefined) => {
          if (!old) return old;
          const index = parseInt(updated.id);
          const educations = (old.data?.educations || []).map(
            (education: any, i: number) =>
              i === index ? { ...education, ...updated } : education,
          );
          return { ...old, data: { ...(old.data || {}), educations } };
        });
      }
    },
  });

  return {
    updateEducation: mutate,
    updateEducationAsync: mutateAsync,
    isPending,
    isError,
  };
}
