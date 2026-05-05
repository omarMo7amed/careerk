/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyCVInfo } from "../api/getMyCVInfo";
import { uploadCVToServer } from "../api/uploadCV";
import { jobSeekerKeys, useMyProfileQuery } from "@/entities/job-seeker";
import { confirmCVParse } from "../api/confirmCVParse";
import { CVConfirmPayload } from "../types/cvParseResponse";

export function useCV({ token }: { token: string }) {
  const queryClient = useQueryClient();
  const { mutate, error, isError, isPending } = useMutation({
    mutationKey: ["cv-info"],
    mutationFn: (file: File) => uploadCVToServer(token, file),
    onSuccess: (data) => {
      queryClient.setQueryData(["cv-info"], data.data);
      return data.data;
    },
  });
  return { uploadCVToServer: mutate, isError, error, isPending };
}

export function useCVInfo({ token }: { token: string }) {
  const { jobSeeker, isLoading: isProfileLoading } = useMyProfileQuery({
    token,
  });
  const test = { firstName: "omar", lastName: "mohamed", profile: null };
  const hasProfile = !!jobSeeker?.profile;
  console.log("Job Seeker Profile:", hasProfile);

  const {
    data: cvData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["cv-info"],
    queryFn: () => getMyCVInfo(token),
    enabled: !hasProfile, // Only fetch if profile doesn't exist
    staleTime: 5 * 60 * 1000,
  });

  if (hasProfile) {
    return {
      data: jobSeeker,
      isLoading: isProfileLoading,
      error: null,
      hasProfile,
    };
  }
  return { data: cvData?.data, error, isLoading, hasProfile };
}

export function useConfirmCVParse({ token }: { token: string }) {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["cv-info"]) as any;

  const payload: CVConfirmPayload = {
    parseResultId: data?.parseResultId,
    data: {
      firstName: data?.data?.firstName,
      lastName: data?.data?.lastName,
      cvEmail: data?.data?.profile?.cvEmail,
      phone: data?.data?.profile?.phone,
      location: data?.data?.profile?.location,
      linkedinUrl: data?.data?.profile?.linkedinUrl,
      githubUrl: data?.data?.profile?.githubUrl,
      portfolioUrl: data?.data?.profile?.portfolioUrl,
      title: data?.data?.profile?.title,
      summary: data?.data?.profile?.summary,
      noticePeriod: data?.data?.profile?.noticePeriod,
      workPreference: data?.data?.profile?.workPreference,
      availabilityStatus: data?.data?.profile?.availabilityStatus,
      education: data?.data?.educations,
      skills: data?.data?.skills,
    },
  };
  const { mutateAsync, error, isError, isSuccess, isPending } = useMutation({
    mutationKey: ["cv-info"],
    mutationFn: () => confirmCVParse(payload, token),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["cv-info"] });
      queryClient.setQueryData(jobSeekerKeys.me.all, (old: any) => {
        if (!old) return old;
        return {
          ...old,
          data: {
            ...old.data,
            firstName: payload?.data?.firstName,
            lastName: payload?.data?.lastName,
            educations: payload?.data?.education,
            skills: payload?.data?.skills,
            workExperiences: data?.data?.workExperiences,
            profile: {
              ...old.data.profile,
              cvEmail: payload?.data?.cvEmail,
              phone: payload?.data?.phone,
              location: payload?.data?.location,
              linkedinUrl: payload?.data?.linkedinUrl,
              githubUrl: payload?.data?.githubUrl,
              portfolioUrl: payload?.data?.portfolioUrl,
              title: payload?.data?.title,
              summary: payload?.data?.summary,
              noticePeriod: payload?.data?.noticePeriod,
              workPreference: payload?.data?.workPreference,
              availabilityStatus: payload?.data?.availabilityStatus,
            },
          },
        };
      });
    },
  });
  return { confirmCVParse: mutateAsync, isError, error, isSuccess, isPending };
}
