"use client";
import { useQuery } from "@tanstack/react-query";
import { jobSeekerKeys, JobSeeker, getMe } from "@/entities/job-seeker";
import type { JobSeekerSkill } from "../types/skill";

const selectSkills = (data: JobSeeker): JobSeekerSkill[] => data.skills;

export function useSkillsQuery() {
  return useQuery<JobSeeker, Error, JobSeekerSkill[]>({
    queryKey: jobSeekerKeys.me.all,
    queryFn: getMe,
    staleTime: 1000 * 60 * 5,
    select: selectSkills,
  });
}
