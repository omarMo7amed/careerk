import { UpdateNotificationRequest, UpdateNotificationResponse } from "..";

export async function toggleNotification(
  request: UpdateNotificationRequest,
): Promise<UpdateNotificationResponse> {
  console.log("Toggling notification with request:", request);
  return {
    success: true,
    message: "Notification preference updated",
  };
}
