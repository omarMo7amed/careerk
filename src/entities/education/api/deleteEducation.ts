import { authInterceptor } from "@/shared";

export async function deleteEducation(token: string, educationId: string) {
  const res = await authInterceptor(
    `/job-seekers/me/educations/${educationId}`,
    {
      method: "DELETE",
    },
  );

  if (!res.ok) throw new Error("Failed to delete education");
  return res.json();
}
