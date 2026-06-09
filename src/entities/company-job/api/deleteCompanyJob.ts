import { DeleteJobResponse } from "../types/companyJob";
import { authInterceptor } from "@/shared";

export async function deleteCompanyJob(
  id: string
): Promise<string> {
  const res = await authInterceptor(
    `/companies/me/jobs/${id}`,
    {
      method: "DELETE"
    },
  );

  const json: DeleteJobResponse = await res.json();

  if (!res.ok) {
    throw new Error(json?.message || "Failed to delete job");
  }

  // console.log("Delete job response:", json.data);
  //return undefined
  return json.data.id;
}
