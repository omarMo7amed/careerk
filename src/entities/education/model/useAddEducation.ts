/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createEducation,
  type CreateEducationInput,
} from "../api/createEducation";
import { jobSeekerKeys, type JobSeeker } from "@/entities/job-seeker";
import type { Education } from "../types/types";
import { useCVInfo } from "@/entities/cv";
import { usePathname } from "next/navigation";

type JobSeekerCache = {
  data?: JobSeeker;
};

export function useCreateEducation() {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const isCvPage = pathname.includes("/dashboard/jobseeker/cv-management");
  const { isUpdatePending, isFirstUpload } = useCVInfo();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (education: CreateEducationInput) => {
      if ((isCvPage && isUpdatePending) || isFirstUpload) {
        return Promise.resolve({ data: education } as { data: Education });
      }
      return createEducation(education);
      // If no profile, don't call API, just return the education
    },
    onSuccess: (created: { data: Education }) => {
      console.log("Education created successfully:", created.data);
      if (!((isCvPage && isUpdatePending) || isFirstUpload)) {
        queryClient.setQueryData(
          jobSeekerKeys.me.all,
          (old: JobSeekerCache | undefined) => {
            if (!old) return old;
            const educations = [...(old.data?.educations || []), created.data];
            return { ...old, data: { ...(old.data || {}), educations } };
          },
        );
      } else {
        queryClient.setQueryData(["cv-info"], (old: any | undefined) => {
          if (!old) return old;
          const educations = [...(old?.data?.educations || []), created.data];
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
