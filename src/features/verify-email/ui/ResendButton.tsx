"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useResendOtp } from "../model/useResendOtp";
import toast from "react-hot-toast";
import { Button } from "@/shared";

interface ResendButtonProps {
  email: string;
  onResendSuccess?: () => void;
}

export function ResendButton({ email, onResendSuccess }: ResendButtonProps) {
  const [countdown, setCountdown] = useState(60);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { mutate: resendCode, isPending } = useResendOtp();

  const clearCountdown = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearCountdown();

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearCountdown();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  }, [clearCountdown]);

  useEffect(() => {
    startTimer();
    return clearCountdown;
  }, [startTimer, clearCountdown]);

  const handleResend = () => {
    resendCode(
      { email },
      {
        onSuccess: (response) => {
          toast.success(response.message);
          setCountdown(60);
          startTimer();
          onResendSuccess?.();
        },
      },
    );
  };
  return (
    <div className="text-center">
      <p className="text-sm text-text-secondary mb-2">
        Didn&apos;t receive the code?
      </p>
      <Button onClick={handleResend} disabled={isPending || countdown > 0}>
        {countdown > 0
          ? `Resend in ${countdown}s`
          : isPending
            ? "Sending..."
            : "Resend Code"}
      </Button>
    </div>
  );
}
