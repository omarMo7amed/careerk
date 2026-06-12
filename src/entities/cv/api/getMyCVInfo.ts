import { authInterceptor } from "@/shared";

export async function getMyCVInfo() {
  try {
    const res = await authInterceptor("/cv-parse/preview", {});
    if (!res.ok) {
      if (res.status === 404) {
        return { data: undefined };
      }
      throw new Error("Failed to fetch CV info");
    }
    return res.json();
  } catch (error: unknown) {
    if (
      error instanceof Error &&
      error.message === "No CV parse result found. Please upload a CV first."
    ) {
      return { data: undefined };
    }

    throw error;
  }
}
