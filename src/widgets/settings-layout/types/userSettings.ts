export interface NotificationPreferences {
  applicationStatusNotificationsEnabled: boolean;
  jobMatchNotificationsEnabled: boolean;
}

export interface UserNotificationSettings {
  applicationStatusNotificationsEnabled: boolean;
  jobMatchNotificationsEnabled: boolean;
  updatedAt: string;
}

export interface UserSettingsResponse {
  success: boolean;
  data: UserNotificationSettings;
  message: string;
  meta: {
    timestamp: string;
    path: string;
    method: string;
  };
}
