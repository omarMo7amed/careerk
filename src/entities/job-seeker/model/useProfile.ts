"use client";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/getMe";
import { jobSeekerKeys } from "../lib/queryKeys";
import { selectBase } from "../lib/selectBase";

export function useMyProfileQuery({ token }: { token: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: jobSeekerKeys.me.all,
    queryFn: () => getMe(token),
    staleTime: 1000 * 60 * 5,
    // placeholderData: mockJobSeeker, //this for test ya zmeeely
  });

  return {
    jobSeeker: data?.data,
    isLoading,
    error,
  };
}

export function useBaseProfile({ token }: { token: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: jobSeekerKeys.me.all,
    queryFn: () => getMe(token),
    select: selectBase,
    staleTime: 1000 * 60 * 5,
  });
  return { jobSeekerBase: data, isLoading, error };
}

export function useProfileDetails({ token }: { token: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: jobSeekerKeys.me.all,
    queryFn: () => getMe(token),
    staleTime: 1000 * 60 * 5,
    select: (d) => d.data?.profile,
  });
  return { jobSeekerDetails: data, isLoading, error };
}

export function useEducations({ token }: { token: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: jobSeekerKeys.me.all,
    queryFn: () => getMe(token),
    select: (d) => d.data?.educations,
    staleTime: 1000 * 60 * 5,
  });
  return { educations: data, isLoading, error };
}

export function useWorkExperiences({ token }: { token: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: jobSeekerKeys.me.all,
    queryFn: () => getMe(token),
    select: (d) => d.data?.workExperiences,
    staleTime: 1000 * 60 * 5,
  });
  return { workExperiences: data, isLoading, error };
}

export function useSkills({ token }: { token: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: jobSeekerKeys.me.all,
    queryFn: () => getMe(token),
    select: (d) => d.data?.skills,
    staleTime: 1000 * 60 * 5,
  });
  return { skills: data, isLoading, error };
}
