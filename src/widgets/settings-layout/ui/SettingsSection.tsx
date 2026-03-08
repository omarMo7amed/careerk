"use client";
import { ToggleThemeButton } from "@/features/toggle-theme";
import { useState } from "react";
import { DangerZoneTab } from "./DangerZone";
import { NotificationsTab } from "./NotificationsTab";
import { SecurityTab } from "./SecurityTab";
import { SettingsTabs } from "./SettingsTabs";

interface SettingsSectionProps {
  role: "jobseeker" | "company";
}

export function SettingsSection({ role }: SettingsSectionProps) {
  const [activeTab, setActiveTab] = useState("notifications");
  return (
    <div className="w-full p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold  mb-2">Settings</h1>
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
            Verified Account
          </span>
        </div>

        {/* Theme Toggle */}
        <ToggleThemeButton />
      </div>

      {/* Tabs */}
      <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content */}
      <div className="mt-8">
        {activeTab === "notifications" && <NotificationsTab role={role} />}
        {activeTab === "danger-zone" && <DangerZoneTab />}
        {activeTab === "security" && <SecurityTab />}
      </div>
    </div>
  );
}
