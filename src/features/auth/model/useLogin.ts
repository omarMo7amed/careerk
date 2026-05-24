"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/login";
import { useAuthStore } from "./useAuthStore";
import { jobSeekerKeys } from "@/entities/job-seeker";
import type { LoginRequest } from "../api/types";
import { LoginResponse } from "../types";

function isJobSeekerData(
  data: LoginResponse["data"],
): data is Extract<LoginResponse, { data: { firstName: string } }>["data"] {
  return "firstName" in data;
}

export function useLogin() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: (res) => {
      setAuth(res.data.accessToken, {});

      if (isJobSeekerData(res.data)) {
        queryClient.setQueryData(jobSeekerKeys.me.all, {
          data: {
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            profileImageUrl: res.data.profileImageUrl,
          },
        });

        queryClient.setQueryData([...jobSeekerKeys.me.all, "overview"], {
          data: {
            hasProfile: res.data.hasProfile,
            linkedIn: res.data.linkedIn,
            github: res.data.github,
            totalRecommendedJobs: res.data.totalRecommendedJobs,
            lastLoginAt: res.data.lastLoginAt,
          },
        });
      }
    },
  });

  return {
    login: mutateAsync,
    isPending,
    isSuccess,
    isError,
    error,
  };
}
