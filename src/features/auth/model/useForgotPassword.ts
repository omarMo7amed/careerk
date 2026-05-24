"use client";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../api/forgotPassword";
import type { ForgotPasswordRequest } from "../api/types";
import toast from "react-hot-toast";

export function useForgotPassword() {
  const { mutateAsync, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: (data: ForgotPasswordRequest) => forgotPassword(data),
    onSuccess: (res) => {
      toast.success(
        res.message || "If account exists, password reset email has been sent",
      );
    },
    onError: (error) => {
      toast.error(
        error?.message ||
          "Failed to process forgot password request. Please try again.",
      );
    },
  });

  return {
    forgotPassword: mutateAsync,
    isPending,
    isSuccess,
    isError,
    error,
  };
}
