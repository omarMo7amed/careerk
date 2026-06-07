// components/AuthGuard.tsx
"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "../providers/useAuthStore";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((s) => s.token);
  const role = useAuthStore((s) => s.role);
  // const isLoading = useAuthStore((s) => s.isLoading);
  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
  //   if (isLoading) {
  //     return;
  //   }

  //   if (!token) {
  //     router.replace("/auth/login");
  //     return;
  //   }

  //   const isCompanyPath = pathname.startsWith("/dashboard/company");
  //   const isJobseekerPath = pathname.startsWith("/dashboard/jobseeker");

  //   if (isCompanyPath && role !== "company") {
  //     router.replace("/dashboard/jobseeker/overview");
  //   } else if (isJobseekerPath && role !== "jobseeker") {
  //     router.replace("/dashboard/company/overview");
  //   }
  // }, [isLoading, token, role, router, pathname]);

  // if (isLoading || !token) return null;

  return <>{children}</>;
}
