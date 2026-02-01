"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { validateForm } from "../lib/validationLogin";
import GoogleIcon from "@/shared/ui/GoogleIcon";

export function LoginForm() {
  const [activeTab, setActiveTab] = useState<"jobseekers" | "companies">(
    "jobseekers",
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const finalFormData = {
      ...formData,
      type: activeTab,
    };

    if (!validateForm(finalFormData, setErrors)) return;

    console.log("Form submitted:", finalFormData);

    setFormData({
      email: "",
      password: "",
      remember: false,
    });
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
        <div className="mb-6">
          <div className="flex border-b border-border ">
            <button
              onClick={() => setActiveTab("jobseekers")}
              className={`flex-1 py-3 text-center font-semibold transition-colors ${
                activeTab === "jobseekers"
                  ? "text-primary border-b-2 border-primary"
                  : "hover:text-primary "
              }`}
            >
              Job Seekers
            </button>

            <button
              onClick={() => setActiveTab("companies")}
              className={`flex-1 py-3 text-center font-semibold transition-colors ${
                activeTab === "companies"
                  ? "text-primary border-b-2 border-primary"
                  : "hover:text-primary"
              }`}
            >
              Companies
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <input
            className={`w-full h-12 px-4 bg-bg-surface border border-border rounded-lg placeholder-text-secondary text-text-secondary focus:ring-primary focus:border-transparent 
            ${errors.email ? "border-red-500" : "border-border"}`}
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}

          {/* Password */}
          <input
            className={`w-full h-12 px-4 bg-bg-surface border border-border rounded-lg placeholder-text-secondary text-text-secondary focus:ring-primary focus:border-transparent 
            ${errors.password ? "border-red-500" : "border-border"}`}
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
          )}

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
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
          <button
            type="submit"
            className="w-full h-12 bg-primary text-bg-surface font-bold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-bg-surface">Or continue with</span>
            </div>
          </div>

          {/* Google */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full h-12 bg-bg-surface border border-border text-foreground font-bold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
          >
            <GoogleIcon />
            Sign in with Google
          </button>
        </form>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
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
