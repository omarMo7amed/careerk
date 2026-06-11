/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEducation } from "../api/updateEducation";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { Education } from "../types/types";
import { useCVInfo } from "@/entities/cv";
import { usePathname } from "next/navigation";

type JobSeekerCache = {
  data?: JobSeeker;
};

export function useUpdateEducation() {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const isCvPage = pathname.includes("/dashboard/jobseeker/cv-management");
  const { isUpdatePending, isFirstUpload } = useCVInfo();

  const { mutate, mutateAsync, isPending, isError } = useMutation({
    mutationFn: ({ id, patch }: { id: string; patch: Partial<Education> }) => {
      if ((isCvPage && isUpdatePending) || isFirstUpload) {
        return Promise.resolve({ data: { id, ...patch } } as {
          data: Education;
        });
      }
      // If no profile, don't call API, just return the patch
      return updateEducation(id, patch);
    },
    onSuccess: (updated: { data: Education }) => {
      console.log("Updated education:", updated);
      if (!((isCvPage && isUpdatePending) || isFirstUpload)) {
        // Update jobSeeker cache
        queryClient.setQueryData(
          jobSeekerKeys.me.all,
          (old: JobSeekerCache | undefined) => {
            if (!old) return old;
            const educations = (old.data?.educations || []).map((education) =>
              education.id === updated.data.id
                ? { ...education, ...updated.data }
                : education,
            );
            return { ...old, data: { ...(old.data || {}), educations } };
          },
        );
      } else {
        // Update cv-info cache
        queryClient.setQueryData(["cv-info"], (old: any | undefined) => {
          if (!old) return old;
          const index = parseInt(updated.data.id!);
          const educations = (old.data?.educations || []).map(
            (education: any, i: number) =>
              i === index ? { ...education, ...updated.data } : education,
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
