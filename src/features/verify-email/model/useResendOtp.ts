"use client";

import { useMutation } from "@tanstack/react-query";
import { ResendOtpRequest } from "../types/verifyEmail";
import { resendOtp } from "../api/resendResendOtp";

export function useResendOtp() {
  return useMutation({
    mutationFn: (request: ResendOtpRequest) => resendOtp(request),
  });
}
