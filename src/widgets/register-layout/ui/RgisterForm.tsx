"use client";

import { useState } from "react";
import Link from "next/link";
import GoogleIcon from "../../../shared/ui/GoogleIcon";
import { Button } from "@/shared";
import { Divider } from "@/shared/ui/Divider";
import Tabs from "@/shared/ui/Tabs";
import JobSeekerForm from "./JobSeekerForm";
import CompanyForm from "./CompanyForm";

export function SignupForm() {
  const tabs = ["jobseeker", "company"];
  type UserType = (typeof tabs)[number];

  const [activeTab, setActiveTab] = useState<UserType>("jobseeker");

  function handleGoogleSignUp() {
    console.log("Google signup");
  }

  return (
    <div className="lg:w-1/2 flex flex-col justify-center p-6 sm:p-8 bg-bg-surface">
      <div className="max-w-md mx-auto w-full">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Create your account
          </h1>
          <p className="mt-2">Join us and start your career journey.</p>
        </header>

        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        {/* Job Seekers Form */}
        {activeTab === "jobseeker" && <JobSeekerForm />}

        {/* Companies Form */}
        {activeTab === "company" && <CompanyForm />}

        {/* Divider */}
        <Divider name="Or continue with" />

        {/* Google */}
        <Button
          variant="outline"
          size="md"
          type="button"
          onClick={handleGoogleSignUp}
          className="w-full border border-border text-foreground font-bold rounded-lg hover:bg-gray-50 gap-3"
        >
          <GoogleIcon />
          Sign up with Google
        </Button>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link
              href="./login"
              className="font-semibold text-primary hover:underline"
            >
              Log in
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
