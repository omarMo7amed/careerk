"use client";
import { useMutation } from "@tanstack/react-query";
import type { VerifyEmailRequest } from "../types/verifyEmail";
import { verifyEmail } from "../api/verifyEmail";

export function useVerifyEmail() {
  return useMutation({
    mutationFn: (request: VerifyEmailRequest) => verifyEmail(request),
  });
}
