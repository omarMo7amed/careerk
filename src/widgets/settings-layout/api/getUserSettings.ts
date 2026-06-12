import { authInterceptor } from "@/shared";
import type { UserSettingsResponse } from "..";

export async function getUserSettings(): Promise<UserSettingsResponse> {
  const res = await authInterceptor("/job-seekers/me/notification-preference", {});

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      err?.error?.message || "Failed to fetch notification preferences",
    );
  }

  return res.json();
}
