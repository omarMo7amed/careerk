"use client";

import { Button, Input } from "@/shared";
import { useState } from "react";
import { useForgotPassword } from "@/features/auth";
import Link from "next/link";

interface ForgotPasswordStepProps {
  onSubmit: (email: string) => void;
}

export function ForgotPasswordStep({
  onSubmit,
  email: cachedEmail,
}: ForgotPasswordStepProps & { email: string }) {
  const { forgotPassword, isPending } = useForgotPassword();
  const [email, setEmail] = useState(cachedEmail);
  const [error, setError] = useState("");

  console.log("ForgotPasswordStep rendered with email:", email);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      await forgotPassword({ email });
      onSubmit(email);
    } catch {
      setError("Failed to send reset code. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-foreground">
          Forgot Password?
        </h2>
        <p className="text-text-secondary mb-4">
          Enter your email address and we&apos;ll send you a code to reset your
          password.
        </p>
      </div>

      {error && (
        <div className="bg-error/10 border border-error text-error px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <Input
        name="email"
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        defaultValue={email}
        // value={email}
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
        {isPending ? "Sending..." : "Send Reset Code"}
      </Button>

      <div className="text-center">
        <p className="text-sm text-text-secondary">
          Remember your password?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </form>
  );
}
