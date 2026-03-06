export interface UpdateNotificationRequest {
  preferenceId: string;
  enabled: boolean;
}

export interface UpdateNotificationResponse {
  success: boolean;
  message: string;
}
