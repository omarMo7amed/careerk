import { authInterceptor } from "@/shared";

export async function getMyCVInfo(token: string) {
  try {
    const res = await authInterceptor("/cv-parse/preview", {});
    if (!res.ok) {
      throw new Error("Failed to fetch CV info");
    }
    return res.json();
  } catch (error) {
    throw new Error(
      "Failed to fetch CV info: " +
        (error instanceof Error ? error.message : String(error)),
    );
  }
}
