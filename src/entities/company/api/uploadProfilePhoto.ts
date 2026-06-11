import { authInterceptor } from "@/shared";

export async function uploadProfilePhoto(file: File) {
  // Step 1: Get presigned URL from CareerK API
  const presignedRes = await authInterceptor(
    "/companies/me/images/presigned-url",
    {
      method: "POST",
      body: JSON.stringify({
        fileName: file.name,
        mimeType: file.type,
      }),
    },
  );

  if (!presignedRes.ok) throw new Error("Failed to get presigned URL");
  const data = await presignedRes.json();
  const { uploadUrl, key } = data.data; // uploadUrl for R2, key to confirm upload

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
  const confirmRes = await authInterceptor("/companies/me/images/confirm", {
    method: "POST",
    body: JSON.stringify({ key }),
  });

  if (!confirmRes.ok) throw new Error("Failed to confirm image upload");
  const { fileUrl } = await confirmRes.json();

  // // Step 4: Update profile with new image URL
  // const updateRes = await updateProfile({ profileImageUrl: fileUrl });

  return fileUrl;
}
