import type { UserNotificationSettings, UserSettingsResponse } from "..";

const mockUserSettings: UserNotificationSettings = {
  userId: "user-123",
  preferences: {
    // Job Seeker preferences
    "job-match": true,
    "application-status": true,
    "interview-scheduled": false,

    // Company preferences
    "new-application": false,
    "candidate-match": true,
    "job-expiring": true,
  },
  updatedAt: new Date().toISOString(),
};

export async function getUserSettings(): Promise<UserSettingsResponse> {
  console.log("Fetching user settings from API...");

  return {
    success: true,
    data: mockUserSettings,
    message: "Settings retrieved successfully",
  };
}
