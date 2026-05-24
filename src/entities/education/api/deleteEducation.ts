export async function deleteEducation(token: string, educationId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/me/educations/${educationId}`,
    {
      method: "DELETE",
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) throw new Error("Failed to delete education");
  return res.json();
}
