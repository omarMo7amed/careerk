import { authInterceptor } from "@/shared";

export async function deleteCVParse(): Promise<void> {
  const res = await authInterceptor("/cv-parse", {
    method: "DELETE",
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error?.message || `Failed to delete CV parse (${res.status})`);
  }
}
