"use client";

import { Button, Input } from "@/shared";
import { useState } from "react";
import { LoginState } from "../types/loginFormTypes";
import Link from "next/link";
import { useLogin } from "@/features/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const initialState: LoginState = {
  errors: {},
  success: false,
};

export function LoginFormContent({ role }: { role: string }) {
  const { login, isPending, isError, error } = useLogin();
  const router = useRouter();
  const [state, setState] = useState<LoginState>(initialState);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setState({
        errors: {
          email: !formData.email ? ["Email is required"] : undefined,
          password: !formData.password ? ["Password is required"] : undefined,
        },
        success: false,
      });
      return;
    }

    try {
      await login({
        email: formData.email,
        password: formData.password,
      });

      toast.success("Login successful");

      const dashboardUrl =
        role === "jobseeker"
          ? "/dashboard/jobseeker/overview"
          : "/dashboard/company/overview";

      setTimeout(() => {
        router.push(dashboardUrl);
      }, 1000);
    } catch (err) {
      toast.error(error?.message || "Login failed. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="hidden" name="role" value={role} />

      <Input
        name="email"
        label="Email"
        error={
          state?.errors.email?.[0] || (isError ? error?.message : undefined)
        }
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <Input
        name="password"
        label="Password"
        error={
          state?.errors.password?.[0] || (isError ? error?.message : undefined)
        }
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            name="remember"
            id="remember"
            type="checkbox"
            checked={formData.remember}
            onChange={(e) =>
              setFormData({ ...formData, remember: e.target.checked })
            }
            className="w-4 h-4 rounded-lgl border-border text-primary focus:ring-primary accent-primary"
          />
          <label htmlFor="remember" className="ml-2 text-sm text-foreground">
            Remember me
          </label>
        </div>
        <Link
          href="/auth/forgot-password"
          className="text-sm text-text-secondary hover:text-primary underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button disabled={isPending} type="submit" className="w-full">
        {isPending ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
