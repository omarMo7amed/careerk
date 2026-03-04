// Replace with your actual backend endpoint
const CV_UPLOAD_URL = "/api/cv/upload";

export async function uploadCVToServer(file: File): Promise<void> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(CV_UPLOAD_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const message = await response.text().catch(() => "Upload failed.");
    throw new Error(message || "Upload failed.");
  }
}
