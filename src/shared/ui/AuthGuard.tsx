// components/AuthGuard.tsx
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "../providers/useAuthStore";
import { Loader } from "./Loader";
import { useLayoutEffect } from "react";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((s) => s.token);
  const role = useAuthStore((s) => s.role);
  const isInitialized = useAuthStore((s) => s.isInitialized);
  const router = useRouter();
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Wait until the refresh-token bootstrap has fully completed
    if (!isInitialized) return;

    if (!token) {
      router.replace("/auth/login");
      return;
    }

    const isCompanyPath = pathname.startsWith("/dashboard/company");
    const isJobseekerPath = pathname.startsWith("/dashboard/jobseeker");

    if (isCompanyPath && role !== "company") {
      router.replace("/dashboard/jobseeker/overview");
    } else if (isJobseekerPath && role !== "jobseeker") {
      router.replace("/dashboard/company/overview");
    }
  }, [isInitialized, token, role, router, pathname]);

  // Show a full-screen loader until the auth bootstrap has finished
  if (!isInitialized) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!token) return null;

  return <>{children}</>;
}
