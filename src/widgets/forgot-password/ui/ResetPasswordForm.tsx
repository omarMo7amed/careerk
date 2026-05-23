"use client";

import { Button, Input } from "@/shared";
import { useState } from "react";
import { useResetPassword } from "@/features/auth";
import { useSearchParams } from "next/navigation";

export function ResetPasswordForm() {
  const { resetPassword, isPending } = useResetPassword();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});

  function validateForm() {
    const newErrors: { password?: string; confirmPassword?: string } = {};

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!token) {
      setErrors({ password: "Invalid reset link" });
      return;
    }

    try {
      await resetPassword({
        token,
        newPassword: formData.password,
      });
    } catch (error) {
      // Error is handled by the hook's toast
    }
  }

  if (!token) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-surface rounded-xl shadow-md p-8 text-center border border-border">
          <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-error"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2 text-foreground">
            Invalid Link
          </h1>
          <p className="text-text-secondary">
            This password reset link is invalid or has expired. Please request a
            new one.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-foreground">
          Reset Your Password
        </h2>
        <p className="text-text-secondary mb-4">
          Enter a new password below to reset your account password.
        </p>
      </div>

      <Input
        name="password"
        label="New Password"
        type="password"
        placeholder="Enter new password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        error={errors.password}
        required
      />

      <Input
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        error={errors.confirmPassword}
        required
      />

      <Button
        disabled={isPending || !formData.password || !formData.confirmPassword}
        variant="primary"
        size="md"
        type="submit"
        className="w-full"
      >
        {isPending ? "Resetting..." : "Reset Password"}
      </Button>
    </form>
  );
}
