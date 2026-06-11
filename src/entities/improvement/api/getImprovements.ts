import { authInterceptor } from "@/shared";

export async function getImprovements() {
  try {
    const res = await authInterceptor("/job-seekers/me/skill-analysis/latest", {
      method: "GET",
    });

    // if (!res.ok) throw new Error("Failed to fetch improvement report");
    return res.json();
  } catch (error: unknown) {
    if (
      error instanceof Error &&
      error.message === "No analysis found. Please create one first."
    ) {
      return { data: undefined };
    }
    throw error;

    // throw error;
  }
}
