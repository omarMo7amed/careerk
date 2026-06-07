"use client";

import { Button, Input } from "@/shared";
import { useState } from "react";
import { useResetPassword } from "@/features/auth";
import { useRouter } from "next/navigation";

interface SetNewPasswordStepProps {
  email: string;
  otp: string;
  onBack: () => void;
}

export function SetNewPasswordStep({
  email,
  otp,
  onBack,
}: SetNewPasswordStepProps) {
  const { resetPassword, isPending } = useResetPassword();
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});
  const [success, setSuccess] = useState(false);

  function validateForm() {
    const newErrors: { password?: string; confirmPassword?: string } = {};

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number";
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

    try {
      await resetPassword({
        email,
        code: otp,
        newPassword: formData.password,
      });
      setSuccess(true);
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (error) {
      // Error is handled by the hook's toast
      setErrors({ password: "Failed to reset password. Please try again." });
    }
  }

  if (success) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-surface rounded-xl shadow-md p-8 text-center border border-border">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-success"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2 text-foreground">
            Password Reset Successful!
          </h1>
          <p className="text-text-secondary mb-6">
            Your password has been reset. Redirecting to login...
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-foreground">
          Set New Password
        </h2>
        <p className="text-text-secondary mb-4">
          Create a strong password to secure your account
        </p>
      </div>

      {errors.password && !formData.password && (
        <div className="bg-error/10 border border-error text-error px-4 py-3 rounded-lg text-sm">
          {errors.password}
        </div>
      )}

      <div className="space-y-2">
        <Input
          name="password"
          label="New Password"
          type="password"
          placeholder="Enter new password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        {formData.password && errors.password && (
          <p className="text-error text-xs">{errors.password}</p>
        )}
        {formData.password && !errors.password && (
          <div className="space-y-1 text-xs text-text-secondary">
            <p>✓ At least 8 characters</p>
            <p
              className={/[A-Z]/.test(formData.password) ? "text-success" : ""}
            >
              {/[A-Z]/.test(formData.password) ? "✓" : "•"} At least one
              uppercase letter
            </p>
            <p
              className={/[0-9]/.test(formData.password) ? "text-success" : ""}
            >
              {/[0-9]/.test(formData.password) ? "✓" : "•"} At least one number
            </p>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Input
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm new password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          required
        />
        {formData.confirmPassword && errors.confirmPassword && (
          <p className="text-error text-xs">{errors.confirmPassword}</p>
        )}
      </div>

      <Button
        disabled={isPending || !formData.password || !formData.confirmPassword}
        variant="primary"
        size="md"
        type="submit"
        className="w-full"
      >
        {isPending ? "Resetting Password..." : "Reset Password"}
      </Button>

      <button
        type="button"
        onClick={onBack}
        className="w-full text-sm text-primary hover:underline"
      >
        Back to verification
      </button>
    </form>
  );
}
