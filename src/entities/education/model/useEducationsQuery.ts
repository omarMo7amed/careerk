"use client";
import { useQuery } from "@tanstack/react-query";
import { jobSeekerKeys, JobSeeker, getMe } from "@/entities/job-seeker";
import type { Education } from "../types/types";

const selectEducations = (data: JobSeeker): Education[] => data.educations;

export function useEducationsQuery() {
  return useQuery<JobSeeker, Error, Education[]>({
    queryKey: jobSeekerKeys.me.all,
    queryFn: getMe,
    staleTime: 1000 * 60 * 5,
    select: selectEducations,
  });
}
