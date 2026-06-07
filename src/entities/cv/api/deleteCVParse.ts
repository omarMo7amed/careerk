import { authInterceptor } from "@/shared";

export async function deleteCVParse(token: string): Promise<void> {
  const res = await authInterceptor("/cv-parse", {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("cv/api/deleteCVParse.ts تعالي شوف خيبتك يابيه");
  }
}
