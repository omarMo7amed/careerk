export async function uploadProfilePhoto(
  file: File,
): Promise<{ profileImageUrl: string }> {
  // TODO: Replace simulation with real API call once backend is ready:
  // const body = new FormData();
  // body.append("photo", file);
  // const res = await fetch("/api/job-seekers/me/profile-photo", {
  //   method: "PATCH",
  //   body,
  // });
  // if (!res.ok) {
  //   const msg = await res.text().catch(() => "Upload failed");
  //   throw new Error(msg);
  // }
  // return res.json(); // { profileImageUrl: string }

  // Simulate upload delay and return a local object URL
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { profileImageUrl: URL.createObjectURL(file) };
}
