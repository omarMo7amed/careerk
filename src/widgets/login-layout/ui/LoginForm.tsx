"use client";

import { useState } from "react";
import Link from "next/link";
import GoogleIcon from "@/shared/ui/GoogleIcon";
import { Button } from "@/shared";
import { Divider } from "@/shared/ui/Divider";
import Tabs from "@/shared/ui/Tabs";
import { LoginFormContent } from "./LoginFormContent";

export function LoginForm() {
  const tabs = ["jobseeker", "company"];
  type UserType = (typeof tabs)[number];

  const [activeTab, setActiveTab] = useState<UserType>("jobseeker");

  function handleTabChange(tab: UserType) {
    setActiveTab(tab);
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
        <LoginFormContent key={activeTab} role={activeTab} />

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
