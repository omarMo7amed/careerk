import { DeleteJobResponse } from "../types/companyJob";
import { authInterceptor, handleApiError } from "@/shared";

export async function deleteCompanyJob(id: string): Promise<string> {
  console.log("Deleting job with ID:", id);
  const res = await authInterceptor(`/companies/me/jobs/${id}`, {
    method: "DELETE",
  });

  const data: DeleteJobResponse = await res.json();

  if (!res.ok) {
    await handleApiError(res, "Failed to delete company job");
  }

  // console.log("Delete job response:", json.data);
  //return undefined
  return data?.data?.id;
}
