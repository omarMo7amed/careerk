import { authInterceptor } from "@/shared";

export async function uploadCVToServer(file: File) {
  // Step 1: Get presigned URL from CareerK API

  console.log("Requesting presigned URL for file:", file);
  const presignedRes = await authInterceptor("/cv/presigned-url", {
    method: "POST",
    body: JSON.stringify({
      fileName: file.name,
      mimeType: file.type,
    }),
  });

  if (!presignedRes.ok) throw new Error("Failed to get presigned URL");
  const data = await presignedRes.json();

  const { uploadUrl, key } = data.data;
  // Step 2: Upload file to R2 storage
  const uploadRes = await fetch(`${uploadUrl}`, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  if (!uploadRes.ok) throw new Error("Failed to upload CV to storage");

  // Step 3: Confirm upload and get file URL
  const confirmRes = await authInterceptor("/cv/confirm", {
    method: "POST",
    body: JSON.stringify({ key, fileName: file.name, mimeType: file.type }),
  });

  if (!confirmRes.ok) throw new Error("Failed to confirm CV upload");

  return await confirmRes.json();
}
