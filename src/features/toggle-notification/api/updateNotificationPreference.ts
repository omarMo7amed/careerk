import { authInterceptor } from "@/shared";
import type { UpdateNotificationPreferenceDto } from "../types/updateNotificationPreference";

export async function updateNotificationPreference(
  dto: UpdateNotificationPreferenceDto,
) {
  const res = await authInterceptor("/job-seekers/me/notification-preference", {
    method: "PATCH",
    body: JSON.stringify(dto),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      err?.error?.message || "Failed to update notification preferences",
    );
  }

  return res.json();
}
