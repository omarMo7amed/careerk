export async function handleApiError(
  res: Response,
  fallbackMessage: string,
): Promise<never> {
  let errorMessage = fallbackMessage;
  try {
    const data = await res.json();
    if (data?.error?.message) {
      errorMessage = data.error.message || data?.message || fallbackMessage;
    }
  } catch {
    // Ignore JSON parsing errors
  }
  throw new Error(errorMessage);
}
