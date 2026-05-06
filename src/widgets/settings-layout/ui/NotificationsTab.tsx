import { NotificationToggle } from "@/features/toggle-notification";
import { Error, Loader } from "@/shared";
import { Bell } from "lucide-react";
import { getNotificationsByRole } from "../config/notificationConfig";
import { useUserSettings } from "../model/useUserSettings";

interface NotificationsTabProps {
  role: "jobseeker" | "company";
}

export function NotificationsTab({ role }: NotificationsTabProps) {
  const notificationConfigs = getNotificationsByRole(role);
  const { data, isLoading, error } = useUserSettings();

  if (isLoading) return <Loader />;

  if (error) {
    return <Error />;
  }

  const userPreferences = data?.data.preferences || {};

  return (
    <div className="bg-bg-surface rounded-xl border border-border p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Bell className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold ">Notification Preferences</h2>
      </div>

      <div className="space-y-3">
        {notificationConfigs.map((config) => (
          <NotificationToggle
            key={config.id}
            id={config.id}
            label={config.label}
            description={config.description}
            icon={config.icon}
            defaultEnabled={userPreferences[config.id] ?? config.defaultEnabled}
          />
        ))}
      </div>
    </div>
  );
}
