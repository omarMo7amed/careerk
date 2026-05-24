"use client";
import { useMutation } from "@tanstack/react-query";
import type { VerifyEmailRequest } from "../types/index";
import { verifyEmail } from "../api/verifyEmail";
import { resendVerification } from "../api/resendVerification";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";

export function useVerifyEmail() {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const setAuth = useAuthStore((state) => state.setAuth);

  const isJobSeeker = searchParams.get("role") === "jobseeker";

  if (!isJobSeeker && searchParams.get("role") !== "company") {
    router.push("/auth/login");
  }

  const { mutateAsync, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: (data: VerifyEmailRequest) => verifyEmail(data),
    onSuccess: (res) => {
      toast.success(res.message + " You will be redirected to your dashboard");

      setAuth(res.data.accessToken, res.data);

      const dashboardUrl = isJobSeeker
        ? "/dashboard/jobseeker/overview"
        : "/dashboard/company/overview";
      setTimeout(() => {
        router.push(dashboardUrl);
      }, 1000);
    },
    onError: (err) => {
      toast.error(
        err instanceof Error
          ? err.message
          : "Verification failed. Please check your code and try again.",
      );
    },
  });

  const {
    mutateAsync: resendOtpAsync,
    isPending: isResendingOtp,
    isError: isResendError,
    error: resendError,
  } = useMutation({
    mutationFn: (data: { email: string }) => resendVerification(data),
    onSuccess: (res) => {
      toast.success(res.message);
    },
  });

  return {
    verifyEmail: mutateAsync,
    isPending,
    isSuccess,
    isError,
    error,
    resendOTP: resendOtpAsync,
    isResendingOtp,
    isResendError,
    resendError,
  };
}
