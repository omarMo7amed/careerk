/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyCVInfo } from "../api/getMyCVInfo";
import { uploadCVToServer } from "../api/uploadCV";
import { jobSeekerKeys, useMyProfileQuery } from "@/entities/job-seeker";
import { confirmCVParse } from "../api/confirmCVParse";
import { deleteCVParse } from "../api/deleteCVParse";
import { CVConfirmPayload } from "../types/cvParseResponse";
import { jobseekerNavItems } from "@/shared";

export function useCV() {
  const queryClient = useQueryClient();
  const { mutateAsync, error, isError, isPending } = useMutation({
    mutationKey: ["cv-info"],
    mutationFn: (file: File) => uploadCVToServer(file),
    onSuccess: (data) => {
      queryClient.setQueryData(["cv-info"], data);
      return data;
    },
  });
  return { uploadCVToServer: mutateAsync, isError, error, isPending };
}

export function useCVInfo() {
  const { jobSeeker, isLoading: isProfileLoading } = useMyProfileQuery();

  // console.log("Job Seeker Profile Data:", jobSeeker);

  const hasJobSeekerProfile = !!jobSeeker?.profile;

  const {
    data: cvData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["cv-info"],
    queryFn: () => getMyCVInfo(),
    // enabled: !hasJobSeekerProfile,
    staleTime: 5 * 60 * 1000,
  });

  console.log("CV Data:", cvData);

  // if(){
  //   console.error("Error fetching CV info:", error);
  // }
  // State Detection Logic:
  // Case 1: Both cvData AND profile → Pending update (shows "New CV Data Available" CTA with modal)
  // Case 2: Profile only (no cvData) → Confirmed (shows "Data confirmed and locked" CTA)
  // Case 3: cvData only (no profile) → First upload (shows "Ready to confirm?" CTA)
  // case 4: Neither cvData nor profile → Empty state (shows only drop zone)

  const hasCVData = !!cvData?.data || !!cvData?.parseResultId; // PRIMARY CHECK
  // Case 1
  const isUpdatePending = hasCVData && hasJobSeekerProfile;
  // Case 2

  console.log("isUpdatePending:", isUpdatePending);
  console.log(
    "hasCVData, hasJobSeekerProfile:",
    hasCVData,
    hasJobSeekerProfile,
  );
  const isConfirmed = hasJobSeekerProfile && !hasCVData;
  // Case 3
  const isFirstUpload = hasCVData && !hasJobSeekerProfile;

  if (isUpdatePending) {
    return {
      data: cvData?.data,
      isLoading: false,
      error: null,
      hasProfile: true,
      isConfirmed: false,
      isUpdatePending: true,
      isFirstUpload: false,
    };
  }

  // Case 2: Only profile exists (Confirmed)
  if (isConfirmed) {
    return {
      data: jobSeeker,
      isLoading: isProfileLoading,
      error: null,
      hasProfile: true,
      isConfirmed: true,
      isUpdatePending: false,
      isFirstUpload: false,
    };
  }

  // Case 3: Only cvData exists (First upload)
  if (isFirstUpload) {
    return {
      data: cvData?.data,
      isLoading: false,
      error: null,
      hasProfile: false,
      isConfirmed: false,
      isUpdatePending: false,
      isFirstUpload: true,
    };
  }

  // Empty state (neither exists)
  return {
    data: cvData?.data || null,
    error,
    isLoading,
    hasProfile: false,
    isConfirmed: false,
    isUpdatePending: false,
    isFirstUpload: false,
  };
}

export function useConfirmCVParse() {
  const queryClient = useQueryClient();

  const { mutateAsync, error, isPending } = useMutation({
    mutationKey: ["cv-info"],
    mutationFn: async () => {
      const cachedData = queryClient.getQueryData(["cv-info"]) as any;

      if (!cachedData) {
        throw new Error("CV data not found in cache. Please upload CV first.");
      }

      const payload: CVConfirmPayload = {
        parseResultId: cachedData?.data?.parseResultId,
        data: {
          firstName: cachedData?.data?.firstName || "",
          lastName: cachedData?.data?.lastName || "",
          cvEmail: cachedData?.data?.profile?.cvEmail || "",
          phone: cachedData?.data?.profile?.phone || "",
          location: cachedData?.data?.profile?.location || "",
          linkedinUrl: cachedData?.data?.profile?.linkedinUrl || "",
          githubUrl: cachedData?.data?.profile?.githubUrl || "",
          portfolioUrl: cachedData?.data?.profile?.portfolioUrl || "",
          title: cachedData?.data?.profile?.title || "",
          summary: cachedData?.data?.profile?.summary || "",
          noticePeriod: cachedData?.data?.profile?.noticePeriod || 1,
          workPreference: "ONSITE",
          availabilityStatus:
            cachedData?.data?.profile?.availabilityStatus || "OPEN_TO_WORK",
          education: cachedData?.data?.educations || [],
          skills:
            cachedData?.data?.skills?.map(
              (skill: { name: string }) => skill.name,
            ) || [],
        },
      };

      const response = await confirmCVParse(payload);
      console.log("CV parse confirmed successfully:", response);
      return { payload, response, cachedData };
    },
    onSuccess: (result) => {
      const { payload, cachedData } = result;

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
            skills: cachedData?.data?.skills,
            workExperiences: cachedData?.data?.workExperiences,
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
      queryClient.setQueryData(
        [...jobSeekerKeys.me.all, "overview"],
        (old: any) => {
          if (!old) return old;

          return {
            ...old,
            data: {
              ...old.data,
              firstName: payload?.data?.firstName,
              lastName: payload?.data?.lastName,
            },
          };
        },
      );
    },
  });

  return {
    confirmCVParse: mutateAsync,
    error,
    isLoading: isPending,
  };
}

export function useRestoreCVParse() {
  const queryClient = useQueryClient();

  const { mutateAsync, error, isPending } = useMutation({
    mutationKey: ["restore-cv"],
    mutationFn: () => deleteCVParse(),
    onSuccess: () => {
      queryClient.setQueryData(["cv-info"], (old: any) => {
        if (!old) return old;
        return { ...old, data: null };
      });
    },
  });

  return { restoreCVParse: mutateAsync, error, isLoading: isPending };
}
