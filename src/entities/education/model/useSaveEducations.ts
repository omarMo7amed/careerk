"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveEducations } from "../api/saveEducations";
import { jobSeekerKeys } from "@/entities/job-seeker/lib/queryKeys";
import type { JobSeeker } from "@/entities/job-seeker/types/jobSeeker";
import type { Education } from "../types/types";

export function useSaveEducations() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: saveEducations,
    onSuccess: (updated: Education[]) => {
      queryClient.setQueryData(
        jobSeekerKeys.me.all,
        (old: JobSeeker | undefined) => {
          if (!old) return old;
          return { ...old, educations: updated };
        },
      );
    },
  });

  return { saveEducations: mutate, isPending, isError };
}
