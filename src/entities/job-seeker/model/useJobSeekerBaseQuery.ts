"use client";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/getMe";
import { jobSeekerKeys } from "../lib/queryKeys";
import type { JobSeekerBase } from "../types/jobSeeker";
import type { JobSeeker } from "../types/jobSeeker";

const selectBase = (data: JobSeeker): JobSeekerBase => ({
  firstName: data.firstName,
  lastName: data.lastName,
  avatarUrl: data.avatarUrl,
});

export function useJobSeekerBaseQuery() {
  return useQuery<JobSeeker, Error, JobSeekerBase>({
    queryKey: jobSeekerKeys.me.all,
    queryFn: getMe,
    staleTime: 1000 * 60 * 5,
    select: selectBase,
  });
}
