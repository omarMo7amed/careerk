import type { Education } from "../types/types";

export async function saveEducations(
  educations: Education[],
): Promise<Education[]> {
  // const res = await fetch("/api/job-seekers/me/educations", {
  //   method: "PUT",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ educations }),
  // });
  // if (!res.ok) throw new Error("Failed to save educations");
  // return res.json();
  await new Promise((r) => setTimeout(r, 400));
  return educations;
}
