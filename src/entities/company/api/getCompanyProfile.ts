const BASE_API_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000/api/v1";
export async function getCompanyProfile() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_API_URL}/companies/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  console.log("Company profile response:", data);
  return data;
}
