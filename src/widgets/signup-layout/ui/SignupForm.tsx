"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import GoogleIcon from "../../../shared/ui/GoogleIcon";
import { validateJobSeeker } from "../lib/validateJobSeeker";
import { validateCompany } from "../lib/validateCompany";

export function SignupForm() {
  const [activeTab, setActiveTab] = useState<"jobseekers" | "companies">(
    "jobseekers",
  );

  const [jobSeekerData, setJobSeekerData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [companyData, setCompanyData] = useState({
    companyName: "",
    email: "",
    password: "",
    industry: "",
    size: "1–10",
  });

  const [jobSeekerErrors, setJobSeekerErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [companyErrors, setCompanyErrors] = useState({
    companyName: "",
    email: "",
    password: "",
    industry: "",
  });

  function handleJobSeekerSubmit(e: FormEvent) {
    e.preventDefault();

    const finalData = {
      ...jobSeekerData,
      type: "jobseekers",
    };

    if (!validateJobSeeker(jobSeekerData, setJobSeekerErrors)) return;

    console.log("signed up:", finalData);

    setJobSeekerData({
      fullName: "",
      email: "",
      password: "",
    });
  }

  function handleCompanySubmit(e: FormEvent) {
    e.preventDefault();

    const finalData = {
      ...companyData,
      type: "companies",
    };

    if (!validateCompany(companyData, setCompanyErrors)) return;

    console.log("signed up:", finalData);

    setCompanyData({
      companyName: "",
      email: "",
      password: "",
      industry: "",
      size: "1–10",
    });
  }

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
        <div className="mb-6">
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab("jobseekers")}
              className={`flex-1 py-3 text-center font-semibold transition-colors ${
                activeTab === "jobseekers"
                  ? "text-primary border-b-2 border-primary"
                  : "hover:text-primary"
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

        {/* Job Seekers Form */}
        {activeTab === "jobseekers" && (
          <form onSubmit={handleJobSeekerSubmit} className="space-y-6">
            <input
              className="w-full h-12 px-4 bg-bg-surface border border-border rounded-lg placeholder-text-secondary text-text-secondary focus:ring-primary focus:border-transparent"
              placeholder="Full Name"
              value={jobSeekerData.fullName}
              onChange={(e) =>
                setJobSeekerData({
                  ...jobSeekerData,
                  fullName: e.target.value,
                })
              }
            />
            {jobSeekerErrors.fullName && (
              <p className="text-sm text-red-500 mt-1">
                {jobSeekerErrors.fullName}
              </p>
            )}

            <input
              className="w-full h-12 px-4 bg-bg-surface border border-border rounded-lg placeholder-text-secondary text-text-secondary focus:ring-primary focus:border-transparent"
              placeholder="Email"
              type="email"
              value={jobSeekerData.email}
              onChange={(e) =>
                setJobSeekerData({
                  ...jobSeekerData,
                  email: e.target.value,
                })
              }
            />
            {jobSeekerErrors.email && (
              <p className="text-sm text-red-500 mt-1">
                {jobSeekerErrors.email}
              </p>
            )}

            <input
              className="w-full h-12 px-4 bg-bg-surface border border-border rounded-lg placeholder-text-secondary text-text-secondary focus:ring-primary focus:border-transparent"
              placeholder="Password"
              type="password"
              value={jobSeekerData.password}
              onChange={(e) =>
                setJobSeekerData({
                  ...jobSeekerData,
                  password: e.target.value,
                })
              }
            />
            {jobSeekerErrors.password && (
              <p className="text-sm text-red-500 mt-1">
                {jobSeekerErrors.password}
              </p>
            )}

            <button
              type="submit"
              className="w-full h-12 bg-primary text-bg-surface font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </button>
          </form>
        )}

        {/* Companies Form */}
        {activeTab === "companies" && (
          <form onSubmit={handleCompanySubmit} className="space-y-6">
            <input
              className="w-full h-12 px-4 bg-bg-surface border border-border rounded-lg placeholder-text-secondary text-text-secondary focus:ring-primary focus:border-transparent"
              placeholder="Company Name"
              value={companyData.companyName}
              onChange={(e) =>
                setCompanyData({
                  ...companyData,
                  companyName: e.target.value,
                })
              }
            />
            {companyErrors.companyName && (
              <p className="text-sm text-red-500 mt-1">
                {companyErrors.companyName}
              </p>
            )}

            <input
              className="w-full h-12 px-4 bg-bg-surface border border-border rounded-lg placeholder-text-secondary text-text-secondary focus:ring-primary focus:border-transparent"
              placeholder="Email"
              type="email"
              value={companyData.email}
              onChange={(e) =>
                setCompanyData({
                  ...companyData,
                  email: e.target.value,
                })
              }
            />
            {companyErrors.email && (
              <p className="text-sm text-red-500 mt-1">{companyErrors.email}</p>
            )}

            <input
              className="w-full h-12 px-4 bg-bg-surface border border-border rounded-lg placeholder-text-secondary text-text-secondary focus:ring-primary focus:border-transparent"
              placeholder="Password"
              type="password"
              value={companyData.password}
              onChange={(e) =>
                setCompanyData({
                  ...companyData,
                  password: e.target.value,
                })
              }
            />
            {companyErrors.password && (
              <p className="text-sm text-red-500 mt-1">
                {companyErrors.password}
              </p>
            )}

            <input
              className="w-full h-12 px-4 bg-bg-surface border border-border rounded-lg placeholder-text-secondary text-text-secondary focus:ring-primary focus:border-transparent"
              placeholder="Industry"
              value={companyData.industry}
              onChange={(e) =>
                setCompanyData({
                  ...companyData,
                  industry: e.target.value,
                })
              }
            />
            {companyErrors.industry && (
              <p className="text-sm text-red-500 mt-1">
                {companyErrors.industry}
              </p>
            )}

            <select
              className="w-full h-12 px-4 bg-bg-surface border border-border rounded-lg text-text-secondary focus:ring-primary focus:border-transparent"
              value={companyData.size}
              onChange={(e) =>
                setCompanyData({
                  ...companyData,
                  size: e.target.value,
                })
              }
            >
              <option>1–10</option>
              <option>11–50</option>
              <option>51–100</option>
              <option>101–500</option>
              <option>500+</option>
            </select>

            <button
              type="submit"
              className="w-full h-12 bg-primary text-bg-surface font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </button>
          </form>
        )}

        {/* Divider */}
        <div className="relative my-6">
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
          onClick={handleGoogleSignUp}
          className="w-full h-12 bg-bg-surface border border-border text-foreground font-bold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
        >
          <GoogleIcon />
          Sign up with Google
        </button>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
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
