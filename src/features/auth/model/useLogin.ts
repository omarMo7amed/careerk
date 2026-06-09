/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/login";
import { useAuthStore } from "@/shared";
import { jobSeekerKeys } from "@/entities/job-seeker";
import type { LoginRequest } from "../types";
import type { LoginResponse } from "@/shared";

export function useLogin() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isSuccess, isError, error } = useMutation<
    LoginResponse,
    Error,
    LoginRequest
  >({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: async (res: LoginResponse) => {
      console.log(
        "Login successful, setting auth and prefetching data...",
        res,
      );
      setAuth(res.data.accessToken, res.data.role);

      console.log(
        "Login successful, setting auth and prefetching data...",
        res.data.role,
      );

      if (res.data.role === "jobseeker" || res.data.role === "job-seeker") {
        const d = res.data as any;

        console.log(
          "Prefetching job seeker data with:",
          d.firstName,
          d.lastName,
        );

        queryClient.setQueryData(jobSeekerKeys.me.all, (old: any) => ({
          ...(old ?? {}),
          data: {
            ...(old?.data ?? {}),
            firstName: d.firstName,
            lastName: d.lastName,
            profileImageUrl: d.profileImageUrl,
          },
        }));

        queryClient.setQueryData([...jobSeekerKeys.me.all, "overview"], () => ({
          data: {
            hasProfile: d.hasProfile,
            linkedIn: d.linkedIn,
            github: d.github,
            totalRecommendedJobs: d.totalRecommendedJobs,
            lastLoginAt: d.lastLoginAt,
          },
        }));
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
