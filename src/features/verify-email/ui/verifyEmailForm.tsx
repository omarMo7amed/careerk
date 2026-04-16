"use client";
import { Button, Loader } from "@/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useVerifyEmail } from "../model/useVerifyEmail";
import {
  VerifyEmailFormData,
  verifyEmailSchema,
} from "../model/verifyEmailSchema";
import { ExpiryTimer } from "./ExpiryTimer";
import { OtpInput } from "./OtpInput";
import { ResendButton } from "./ResendButton";

export function VerifyEmailForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromUrl = searchParams.get("email") || "";

  const [otpValue, setOtpValue] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { mutate, isPending } = useVerifyEmail();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VerifyEmailFormData>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      email: emailFromUrl,
      code: "",
    },
  });

  useEffect(() => {
    setValue("code", otpValue);
  }, [otpValue, setValue]);

  const onSubmit = useCallback(
    (data: VerifyEmailFormData) => {
      if (isExpired || isSubmitting) {
        return;
      }

      if (isExpired) {
        toast.error("Code has expired. Please request a new one.");
        return;
      }

      setIsSubmitting(true);

      mutate(data, {
        onSuccess: (response) => {
          if (response.success) {
            toast.success(response.message);
            localStorage.setItem("accessToken", response.data.accessToken);

            const userData = response.data;
            const isJobSeeker = "firstName" in userData;
            const dashboardUrl = isJobSeeker
              ? "/dashboard/jobseeker/overview"
              : "/dashboard/company/overview";

            router.push(dashboardUrl);
          } else {
            toast.error(response.message);
            setOtpValue("");
            setIsSubmitting(false);
          }
        },
        onError: (error) => {
          toast.error(
            error?.message || "Verification failed. Please try again.",
          );
          setOtpValue("");
          setIsSubmitting(false);
        },
      });
    },
    [isExpired, isSubmitting, mutate, router],
  );

  // Auto-submit when 6 digits entered
  useEffect(() => {
    if (otpValue.length === 6 && !isPending && !isExpired) {
      handleSubmit(onSubmit)();
    }
  }, [otpValue, isPending, isExpired, handleSubmit, onSubmit]);

  const handleExpire = () => {
    setIsExpired(true);
    setOtpValue("");
    toast.error("Verification code has expired");
  };

  const handleResendSuccess = () => {
    setIsExpired(false);
    setOtpValue("");
    setTimerKey((prev) => prev + 1);
  };

  // Redirect if no email
  if (!emailFromUrl) {
    router.push("/signup");
    return null;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-surface rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Verify Your Email</h1>
          <p className="text-sm text-text-secondary">
            We&apos;ve sent a 6-digit code to
          </p>
          <p className="text-sm font-semibold mt-1">{emailFromUrl}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input type="hidden" {...register("email")} />

          <div>
            <OtpInput
              value={otpValue}
              onChange={setOtpValue}
              error={errors.code?.message}
              disabled={isPending || isSubmitting || isExpired}
            />
          </div>

          <ExpiryTimer key={timerKey} duration={600} onExpire={handleExpire} />

          <Button
            type="submit"
            disabled={
              isPending || isSubmitting || otpValue.length !== 6 || isExpired
            }
            className="w-full"
          >
            {isPending && <Loader />}
            {isPending ? "Verifying..." : "Verify Email"}
          </Button>

          <ResendButton
            email={emailFromUrl}
            onResendSuccess={handleResendSuccess}
          />
        </form>

        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => router.push("/signup")}
            className="text-sm text-text-secondary "
          >
            Wrong email?{" "}
            <span className="font-semibold text-primary ml-4">Change it</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
