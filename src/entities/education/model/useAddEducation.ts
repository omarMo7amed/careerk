/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createEducation,
  type CreateEducationInput,
} from "../api/createEducation";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { Education } from "../types/types";

type JobSeekerCache = {
  data?: JobSeeker;
};

export function useCreateEducation({
  hasProfile,
  token,
}: {
  token: string;
  hasProfile: boolean;
}) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (education: CreateEducationInput) => {
      if (hasProfile) {
        return createEducation(token, education);
      }
      // If no profile, don't call API, just return the education
      return Promise.resolve(education as Education);
    },
    onSuccess: (created: Education) => {
      if (hasProfile) {
        queryClient.setQueryData(
          jobSeekerKeys.me.all,
          (old: JobSeekerCache | undefined) => {
            if (!old) return old;
            const educations = [...(old.data?.educations || []), created];
            return { ...old, data: { ...(old.data || {}), educations } };
          },
        );
      } else {
        queryClient.setQueryData(["cv-info"], (old: any | undefined) => {
          if (!old) return old;
          const educations = [...(old?.data?.educations || []), created];
          return { ...old, data: { ...(old.data || {}), educations } };
        });
      }
    },
  });

  return {
    createEducation: mutate,
    isPending,
    isError,
  };
}
