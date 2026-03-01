"use client";
import { useQuery } from "@tanstack/react-query";

import { JobSeeker, jobSeekerKeys, getMe } from "@/entities/job-seeker";
import type { WorkExperience } from "../types/types";

const selectWorkExperiences = (data: JobSeeker): WorkExperience[] =>
  data.workExperiences;

export function useWorkExperiencesQuery() {
  return useQuery<JobSeeker, Error, WorkExperience[]>({
    queryKey: jobSeekerKeys.me.all,
    queryFn: getMe,
    staleTime: 1000 * 60 * 5,
    select: selectWorkExperiences,
  });
}
