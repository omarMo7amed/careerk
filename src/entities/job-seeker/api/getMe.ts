import { authInterceptor } from "@/shared";

export async function getMe() {
  const res = await authInterceptor("/job-seekers/me", {});

  if (!res.ok) throw new Error("Failed to fetch job seeker profile");

  const data = await res.json();

  console.log("Fetched job seeker profile:", data);

  return data;
}
