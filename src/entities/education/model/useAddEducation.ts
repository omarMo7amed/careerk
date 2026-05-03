"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEducation, type CreateEducationInput } from "../api/createEducation";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { Education } from "../types/types";

type JobSeekerCache = {
  data?: JobSeeker;
};

export function useCreateEducation(token: string) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (education: CreateEducationInput) =>
      createEducation(token, education),
    onSuccess: (created: Education) => {
      queryClient.setQueryData(
        jobSeekerKeys.me.all,
        (old: JobSeekerCache | undefined) => {
          if (!old) return old;
          const educations = [...(old.data?.educations || []), created];
          return { ...old, data: { ...(old.data || {}), educations } };
        },
      );
    },
  });

  return {
    createEducation: mutate,
    isPending,
    isError,
  };
}
