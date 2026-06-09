import { authInterceptor } from "@/shared";

const BASE_API_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000/api/v1";
export async function getCompanyProfile() {
  const token = localStorage.getItem("token");
  const res = await authInterceptor(`/companies/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });
  const data = await res.json();
  console.log("Company profile response:", data);
  return data;
}
