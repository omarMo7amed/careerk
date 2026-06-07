"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/shared";

export default function NotFound() {
  const router = useRouter();
  const token = useAuthStore((s) => s.token);
  const role = useAuthStore((s) => s.role);

  useEffect(() => {
    if (!token) {
      router.replace("/auth/login");
      return;
    }

    if (role === "company") {
      router.replace("/dashboard/company/overview");
    } else if (role === "jobseeker") {
      router.replace("/dashboard/jobseeker/overview");
    }
  }, [token, role, router]);

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-text-secondary mb-6">Redirecting you...</p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary"></div>
        </div>
      </div>
    </main>
  );
}
