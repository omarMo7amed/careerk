import { authInterceptor } from "@/shared";
import { ChangePasswordRequest, ChangePasswordResponse } from "..";

export async function changePassword(
  request: ChangePasswordRequest,
): Promise<ChangePasswordResponse> {
  const res = await authInterceptor("/auth/change-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || "Password change failed");
  }

  return res.json();
}
