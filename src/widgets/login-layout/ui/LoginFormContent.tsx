"use client";

import { Button, Input } from "@/shared";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "../lib/loginValidation";
import { LoginState } from "../types/loginFormTypes";
import Link from "next/link";

const initialState: LoginState = {
  errors: {},
  success: false,
};

export function LoginFormContent({ role }: { role: string }) {
  const [state, loginAction] = useActionState(login, initialState);
  const { pending } = useFormStatus();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  return (
    <form action={loginAction} className="space-y-4">
      <Input type="hidden" name="role" value={role} />

      <Input
        name="email"
        label="Email"
        error={state?.errors.email?.[0]}
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <Input
        name="password"
        label="Password"
        error={state?.errors.password?.[0]}
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
          href="/forgot-password"
          className="text-sm text-text-secondary hover:text-primary underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button disabled={pending} type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
}
