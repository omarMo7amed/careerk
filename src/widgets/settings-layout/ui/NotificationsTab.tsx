"use client";
import { useState } from "react";
import { NotificationToggle, useUpdateNotificationPreference } from "@/features/toggle-notification";
import { Error, Loader } from "@/shared";
import { Bell } from "lucide-react";
import { getNotificationsByRole } from "../config/notificationConfig";
import type { NotificationConfig } from "../config/notificationConfig";
import { useUserSettings } from "../model/useUserSettings";

interface NotificationsTabProps {
  role: "jobseeker" | "company";
}

export function NotificationsTab({ role }: NotificationsTabProps) {
  const notificationConfigs = getNotificationsByRole(role);

  if (role === "company") {
    return <CompanyNotificationsTab configs={notificationConfigs} />;
  }

  return <JobSeekerNotificationsTab configs={notificationConfigs} />;
}

function JobSeekerNotificationsTab({ configs }: { configs: NotificationConfig[] }) {
  const { data, isLoading, error } = useUserSettings();
  const { updatePreferences, isPending } = useUpdateNotificationPreference();

  if (isLoading) return <Loader />;

  if (error) {
    return <Error />;
  }

  const settings = data?.data;

  return (
    <NotificationsLayout>
      {configs.map((config) => (
        <NotificationToggle
          key={config.id}
          id={config.id}
          label={config.label}
          description={config.description}
          icon={config.icon}
          enabled={(settings as unknown as Record<string, boolean>)?.[config.preferenceKey] ?? config.defaultEnabled}
          onToggle={(enabled) => updatePreferences({ [config.preferenceKey]: enabled })}
          disabled={isPending}
        />
      ))}
    </NotificationsLayout>
  );
}

function CompanyNotificationsTab({ configs }: { configs: NotificationConfig[] }) {
  const [toggles, setToggles] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const config of configs) {
      initial[config.id] = config.defaultEnabled;
    }
    return initial;
  });

  return (
    <NotificationsLayout>
      {configs.map((config) => (
        <NotificationToggle
          key={config.id}
          id={config.id}
          label={config.label}
          description={config.description}
          icon={config.icon}
          enabled={toggles[config.id]}
          onToggle={(enabled) => setToggles((prev) => ({ ...prev, [config.id]: enabled }))}
        />
      ))}
    </NotificationsLayout>
  );
}

function NotificationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bg-surface rounded-xl border border-border p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Bell className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold ">Notification Preferences</h2>
      </div>

      <div className="space-y-3">{children}</div>
    </div>
  );
}
