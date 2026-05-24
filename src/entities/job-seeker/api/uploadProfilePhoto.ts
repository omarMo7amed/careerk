import { updateProfile } from "./updateProfile";

export async function uploadProfilePhoto(token: string, file: File) {
  // Step 1: Get presigned URL from CareerK API
  const presignedRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/me/profile-image/presigned-url`,
    {
      method: "POST",
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName: file.name,
        mimeType: file.type,
      }),
    },
  );

  if (!presignedRes.ok) throw new Error("Failed to get presigned URL");
  const { uploadUrl, key } = await presignedRes.json();

  // Step 2: Upload file to R2 storage
  const uploadRes = await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  if (!uploadRes.ok) throw new Error("Failed to upload image to storage");

  // Step 3: Confirm upload and get file URL
  const confirmRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/job-seekers/me/profile-image/confirm`,
    {
      method: "POST",
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key }),
    },
  );

  if (!confirmRes.ok) throw new Error("Failed to confirm image upload");
  const { fileUrl } = await confirmRes.json();

  // Step 4: Update profile with new image URL
  const updateRes = await updateProfile(token, { profileImageUrl: fileUrl });

  return updateRes;
}
