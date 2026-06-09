/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEducation } from "../api/deleteEducation";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { Education } from "../types/types";
import { useCVInfo } from "@/entities/cv";
import { usePathname } from "next/navigation";

type JobSeekerCache = {
  data?: JobSeeker;
};

export function useDeleteEducation() {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const isCvPage = pathname.includes("/dashboard/jobseeker/cv-management");
  const { isUpdatePending, isFirstUpload } = useCVInfo();

  const { mutate, mutateAsync, isPending, isError } = useMutation({
    mutationFn: (educationId: string) => {
      if ((isCvPage && isUpdatePending) || isFirstUpload) {
        return Promise.resolve(undefined as any);
      }
      // If no profile, don't call API, just return void
      return deleteEducation(educationId);
    },
    onSuccess: (_deleted: Education, educationId: string) => {
      if (!((isCvPage && isUpdatePending) || isFirstUpload)) {
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
