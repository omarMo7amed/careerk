interface DownloadCVError {
  success: boolean;
  error: {
    message: string;
    statusCode: number;
    details: string;
  };
}

export async function downloadCV(token: string) {
  const response = await fetch("/api/v1/cv/me/download-url", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  });

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
