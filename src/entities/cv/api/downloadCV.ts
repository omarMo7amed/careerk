import { authInterceptor } from "@/shared";

interface DownloadCVError {
  success: boolean;
  error: {
    message: string;
    statusCode: number;
    details: string;
  };
}

export async function downloadCV() {
  const response = await authInterceptor(
    `/cv/me/download-url`,
    {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    const errorData = (await response
      .json()
      .catch(() => ({}))) as DownloadCVError;

    const errorMessage = errorData.error?.message || "Failed to download CV";

    if (response.status === 401) {
      throw new Error(errorMessage);
    }

    throw new Error(errorMessage);
  }

  const { data } = await response.json();

  if (!data?.downloadUrl) {
    throw new Error("Failed to get download URL");
  }

  return data;
}
