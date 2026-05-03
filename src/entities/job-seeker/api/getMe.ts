export async function getMe(token: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/me`,
    {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch job seeker profile");

  const data = await res.json();

  // console.log("Fetched job seeker profile:", data);

  return data;
}
