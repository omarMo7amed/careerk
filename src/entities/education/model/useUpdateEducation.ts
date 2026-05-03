"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEducation } from "../api/updateEducation";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { Education } from "../types/types";

type JobSeekerCache = {
  data?: JobSeeker;
};

export function useUpdateEducation(token: string) {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending, isError } = useMutation({
    mutationFn: ({ id, patch }: { id: string; patch: Partial<Education> }) =>
      updateEducation(token, id, patch),
    onSuccess: (updated: Education) => {
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
    },
  });

  return {
    updateEducation: mutate,
    updateEducationAsync: mutateAsync,
    isPending,
    isError,
  };
}
