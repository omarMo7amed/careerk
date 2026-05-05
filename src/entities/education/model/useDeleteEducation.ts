/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEducation } from "../api/deleteEducation";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { Education } from "../types/types";

type JobSeekerCache = {
  data?: JobSeeker;
};

export function useDeleteEducation({
  token,
  hasProfile,
}: {
  token: string;
  hasProfile: boolean;
}) {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending, isError } = useMutation({
    mutationFn: (educationId: string) => {
      if (hasProfile) {
        return deleteEducation(token, educationId);
      }
      // If no profile, don't call API, just return void
      return Promise.resolve(undefined as any);
    },
    onSuccess: (_deleted: Education, educationId: string) => {
      if (hasProfile) {
        // Update jobSeeker cache
        queryClient.setQueryData(
          jobSeekerKeys.me.all,
          (old: JobSeekerCache | undefined) => {
            if (!old) return old;
            const educations = (old.data?.educations || []).filter(
              (education) => education.id !== educationId,
            );
            return { ...old, data: { ...(old.data || {}), educations } };
          },
        );
      } else {
        queryClient.setQueryData(["cv-info"], (old: any | undefined) => {
          if (!old) return old;
          const index = parseInt(educationId);
          const educations = (old.data?.educations || []).filter(
            (_: unknown, i: number) => i !== index,
          );

          console.log("Updated educations after deletion:", educations);
          return { ...old, data: { ...(old.data || {}), educations } };
        });
      }
    },
  });

  return {
    deleteEducation: mutate,
    deleteEducationAsync: mutateAsync,
    isPending,
    isError,
  };
}
