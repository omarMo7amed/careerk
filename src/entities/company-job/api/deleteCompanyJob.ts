import { DeleteJobResponse } from "../types/companyJob";

export async function deleteCompanyJob(
  id: string,
  token: string,
): Promise<string> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/companies/me/jobs/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const json: DeleteJobResponse = await res.json();

  if (!res.ok) {
    throw new Error(json?.message || "Failed to delete job");
  }

  return json.data.id;
}
