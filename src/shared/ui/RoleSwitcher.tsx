"use client";

import { Button } from "@/shared";
import { useRouter } from "next/navigation";

export function RoleSwitcher() {
  const router = useRouter();

  const setRole = (role: "company" | "jobseeker") => {
    // Set cookie that expires in 7 days
    document.cookie = `user_role=${role}; path=/; max-age=604800`;
    router.refresh(); // Refresh to trigger middleware
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-50 flex gap-2 items-center">
      <span className="text-sm font-medium text-gray-600">Dev Mode:</span>
      <Button variant="outline" size="sm" onClick={() => setRole("company")}>
        Switch to Company
      </Button>
      <Button variant="outline" size="sm" onClick={() => setRole("jobseeker")}>
        Switch to Jobseeker
      </Button>
    </div>
  );
}
