import { authInterceptor, useAuthStore } from "@/shared";
import { DeleteAccountResponse } from "..";

export async function deleteAccount(): Promise<DeleteAccountResponse> {
  const role = useAuthStore.getState().role;
  const endpoint =
    role === "company" ? "/companies/me" : "/job-seekers/me";

  const res = await authInterceptor(endpoint, { method: "DELETE" });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || "Failed to delete account");
  }

  return res.json();
}
