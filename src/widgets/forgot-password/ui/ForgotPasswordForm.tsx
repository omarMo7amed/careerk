"use client";

import { Button, Input } from "@/shared";
import { useState } from "react";
import { useForgotPassword } from "@/features/auth";
import Link from "next/link";

export function ForgotPasswordForm() {
  const { forgotPassword, isPending } = useForgotPassword();
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email) {
      return;
    }

    try {
      await forgotPassword({ email });
      setEmailSent(true);
      setEmail("");
    } catch (error) {
      // Error is handled by the hook's toast
    }
  }

  if (emailSent) {
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
            Check Your Email
          </h1>
          <p className="text-text-secondary mb-6">
            If an account exists with that email address, you will receive a
            password reset link shortly.
          </p>
          <Link href="/auth/login">
            <Button variant="primary" className="w-full">
              Back to Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-foreground">
          Forgot Password?
        </h2>
        <p className="text-text-secondary mb-4">
          Enter your email address and we&apos;ll send you a link to reset your
          password.
        </p>
      </div>

      <Input
        name="email"
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Button
        disabled={isPending || !email}
        variant="primary"
        size="md"
        type="submit"
        className="w-full"
      >
        {isPending ? "Sending..." : "Send Reset Link"}
      </Button>

      <div className="text-center">
        <p className="text-sm text-text-secondary">
          Remember your password?{" "}
          <Link
            href="/auth/login"
            className="text-primary hover:underline font-semibold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}
