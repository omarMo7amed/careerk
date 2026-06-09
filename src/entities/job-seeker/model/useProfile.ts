"use client";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/getMe";
import { jobSeekerKeys } from "../lib/queryKeys";
import { selectBase } from "../lib/selectBase";
import { getMyCVInfo, useCVInfo } from "@/entities/cv";
import { usePathname } from "next/navigation";

export function useMyProfileQuery() {
  const { data, isLoading, error } = useQuery({
    queryKey: jobSeekerKeys.me.all,
    queryFn: () => getMe(),
    staleTime: 1000 * 60 * 60,
  });

  return {
    jobSeeker: data?.data,
    isLoading,
    error,
  };
}

export function useBaseProfile() {
  const { data, isLoading, error } = useQuery({
    queryKey: jobSeekerKeys.me.all,
    queryFn: () => getMe(),
    select: selectBase,
    staleTime: 1000 * 60 * 5,
    enabled: false,
  });
  return { jobSeekerBase: data, isLoading, error };
}

export function useProfileDetails() {
  const { data, isLoading, error } = useQuery({
    queryKey: jobSeekerKeys.me.all,
    queryFn: () => getMe(),
    staleTime: 1000 * 60 * 5,
    select: (d) => d?.data?.profile,
  });

  const hasProfile = !!data;
  return { jobSeekerDetails: data, isLoading, error, hasProfile };
}

export function useEducations() {
  const pathname = usePathname();
  const isCvPage = pathname.includes("/dashboard/jobseeker/cv-management");
  console.log("Current Pathname:omar", pathname, "isCvPage:", isCvPage);
  const { isUpdatePending } = useCVInfo();

  const { data, isLoading, error } = useQuery({
    queryKey: isCvPage && isUpdatePending ? ["cv-info"] : jobSeekerKeys.me.all,
    queryFn: () => {
      if (isCvPage && isUpdatePending) {
        return getMyCVInfo();
      }
      return getMe();
    },
    select: (d) => d.data?.educations,
    staleTime: 1000 * 60 * 5,
  });

  return { educations: data, isLoading, error };
}

export function useWorkExperiences() {
  const { data, isLoading, error } = useQuery({
    queryKey: jobSeekerKeys.me.all,
    queryFn: () => getMe(),
    select: (d) => d.data?.workExperiences,
    staleTime: 1000 * 60 * 5,
  });
  return { workExperiences: data, isLoading, error };
}

export function useSkills() {
  const pathname = usePathname();
  const isCvPage = pathname.includes("/dashboard/jobseeker/cv-management");

  const { isUpdatePending, isFirstUpload } = useCVInfo();
  const { data, isLoading, error } = useQuery({
    queryKey:
      (isCvPage && isUpdatePending) || isFirstUpload
        ? ["cv-info"]
        : jobSeekerKeys.me.all,
    queryFn: () => {
      if ((isCvPage && isUpdatePending) || isFirstUpload) {
        return getMyCVInfo();
      }
      return getMe();
    },
    select: (d) => d.data?.skills,
    staleTime: 1000 * 60 * 5,
  });

  return { skills: data, isLoading, error };
}
