"use client";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../api/resetPassword";
import type { ResetPasswordRequest } from "../api/types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useResetPassword() {
  const router = useRouter();

  const { mutateAsync, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: (data: ResetPasswordRequest) => resetPassword(data),
    onSuccess: (res) => {
      toast.success(res.message || "Password has been reset successfully");
      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
    },
    onError: (error) => {
      toast.error(
        error?.message || "Failed to reset password. Please try again.",
      );
    },
  });

  return {
    resetPassword: mutateAsync,
    isPending,
    isSuccess,
    isError,
    error,
  };
}
