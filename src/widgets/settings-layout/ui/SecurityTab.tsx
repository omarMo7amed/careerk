"use client";

import { useState } from "react";
import { ChangePasswordModal } from "@/features/change-password";
import { Shield } from "lucide-react";
import { Button } from "@/shared";

export function SecurityTab() {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  return (
    <>
      <div className="bg-bg-surface rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold">Security & Privacy</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-semibold mb-1 text-lg">Change Password</h4>
              <p className="text-sm text-text-secondary">
                Update your account password
              </p>
            </div>
            <Button onClick={() => setIsPasswordModalOpen(true)}>Change</Button>
          </div>
        </div>
      </div>

      <ChangePasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </>
  );
}
