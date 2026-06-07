"use client";

import { Button } from "@/shared";
import { useState, useCallback, useEffect } from "react";
import { OtpInput, ExpiryTimer } from "@/widgets/email-verfication";
import { useVerifyEmail } from "@/features/auth";
import toast from "react-hot-toast";

interface VerifyOtpStepProps {
  email: string;
  onSubmit: (otp: string) => void;
  onBack: () => void;
}

export function VerifyOtpStep({ email, onSubmit, onBack }: VerifyOtpStepProps) {
  const { resendOTP, isPending: isResending } = useVerifyEmail();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);

  const handleExpire = () => {
    setIsExpired(true);
    setOtp("");
    toast.error("Verification code has expired");
  };

  // Resend countdown timer
  useEffect(() => {
    if (resendCountdown <= 0) return;

    const timer = setInterval(() => {
      setResendCountdown((prev) => {
        if (prev <= 1) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [resendCountdown]);

  const handleResend = useCallback(async () => {
    try {
      await resendOTP({ email });
      setResendCountdown(60);
      setIsExpired(false);
    } catch {}
  }, [email, resendOTP]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!otp) {
      setError("Verification code is required");
      return;
    }

    if (otp.length < 6) {
      setError("Please enter the complete verification code");
      return;
    }

    if (isExpired) {
      setError("Code has expired. Please request a new one.");
      return;
    }

    onSubmit(otp);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2 text-foreground">Verify Code</h2>
        <p className="text-text-secondary mb-4">
          We sent a code to <span className="font-medium">{email}</span>
        </p>
        <ExpiryTimer duration={600} onExpire={handleExpire} />
      </div>

      <div className="space-y-4">
        <OtpInput
          length={6}
          value={otp}
          onChange={setOtp}
          error={error}
          disabled={isExpired}
        />
      </div>

      <Button
        disabled={otp.length < 6 || isExpired}
        variant="primary"
        size="md"
        type="submit"
        className="w-full"
      >
        Continue
      </Button>

      <div className="text-center">
        <p className="text-sm text-text-secondary mb-2">
          Didn&apos;t receive the code?
        </p>
        <Button
          type="button"
          onClick={handleResend}
          disabled={isResending || resendCountdown > 0}
          variant="outline"
          className="w-full"
        >
          {resendCountdown > 0
            ? `Resend in ${resendCountdown}s`
            : isResending
              ? "Sending..."
              : "Resend Code"}
        </Button>
      </div>

      <button
        type="button"
        onClick={onBack}
        className="w-full text-sm text-primary hover:underline"
      >
        Back to email
      </button>
    </form>
  );
}
