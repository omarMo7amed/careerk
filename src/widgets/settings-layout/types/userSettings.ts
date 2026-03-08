export interface UserNotificationSettings {
  userId: string;
  preferences: Record<string, boolean>;
  updatedAt: string;
}

export interface UserSettingsResponse {
  success: boolean;
  data: UserNotificationSettings;
  message: string;
}
