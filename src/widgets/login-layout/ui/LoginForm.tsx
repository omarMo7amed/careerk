"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { validateForm } from "../lib/validationLogin";
import GoogleIcon from "@/shared/ui/GoogleIcon";
import { Button, Input } from "@/shared";
import { Divider } from "@/shared/ui/Divider";
import Tabs from "@/shared/ui/Tabs";

export function LoginForm() {
  const tabs = ["jobseeker", "company"];
  type UserType = (typeof tabs)[number];

  const [activeTab, setActiveTab] = useState<UserType>("jobseeker");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleTabChange(tab: UserType) {
    setActiveTab(tab);
    setFormData({ email: "", password: "", remember: false });
    setErrors({ email: "", password: "" });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const finalFormData = {
      ...formData,
      role: activeTab,
    };

    if (!validateForm(finalFormData, setErrors)) return;

    console.log("Form submitted:", finalFormData);

    setFormData({
      email: "",
      password: "",
      remember: false,
    });
    setErrors({ email: "", password: "" });
  }

  function handleGoogleSignIn() {
    console.log("signed in");
  }

  return (
    <div className="lg:w-1/2 flex flex-col justify-center p-6 sm:p-8 bg-bg-surface">
      <div className="max-w-md mx-auto w-full">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="mt-2">Sign in to find your next opportunity.</p>
        </header>

        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} onChange={handleTabChange} />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}

          <Input
            name="email"
            label="Email"
            error={errors.email}
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          {/* Password */}
          <Input
            name="password"
            label="Password"
            error={errors.password}
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                name="rememder"
                id="remember"
                type="checkbox"
                checked={formData.remember}
                onChange={(e) =>
                  setFormData({ ...formData, remember: e.target.checked })
                }
                className="w-4 h-4 rounded-lgl border-border  text-primary focus:ring-primary accent-primary"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-foreground"
              >
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

          {/* Submit */}
          <Button variant="primary" size="md" type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <Divider name="Or continue with" />

        {/* Google */}
        <Button
          variant="outline"
          size="md"
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full border border-border text-foreground font-bold rounded-lg hover:bg-gray-50 gap-3"
        >
          <GoogleIcon />
          Sign in with Google
        </Button>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="./register"
              className="font-semibold text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
