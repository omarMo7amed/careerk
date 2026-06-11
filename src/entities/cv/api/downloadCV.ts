import { authInterceptor, handleApiError } from "@/shared";

interface DownloadCVError {
  success: boolean;
  error: {
    message: string;
    statusCode: number;
    details: string;
  };
}

export async function downloadCV(id: string) {
  if (!id) {
    throw new Error("CV ID is required");
  }

  const response = await authInterceptor(`/cv/download-url/${id}`, {
    method: "GET",
  });

  if (!response.ok) {
    await handleApiError(response, "Failed to get CV download URL");
  }

  const { data } = await response.json();

  if (!data?.downloadUrl) {
    throw new Error("Failed to get download URL");
  }

  return data;
}
