"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEducation } from "../api/deleteEducation";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { Education } from "../types/types";

type JobSeekerCache = {
  data?: JobSeeker;
};

export function useDeleteEducation(token: string) {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending, isError } = useMutation({
    mutationFn: (educationId: string) => deleteEducation(token, educationId),
    onSuccess: (_deleted: Education, educationId: string) => {
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
    },
  });

  return { deleteEducation: mutate, deleteEducationAsync: mutateAsync, isPending, isError };
}
