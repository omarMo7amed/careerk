import { StoredCV } from "../types/cvLocalStorage";

const CV_STORAGE_KEY = "pending_cv";

export function saveCVToLocalStorage(file: File): Promise<void> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const payload: StoredCV = {
          name: file.name,
          type: file.type,
          size: file.size,
          data: reader.result as string,
          status: "pending",
          savedAt: new Date().toISOString(),
        };
        localStorage.setItem(CV_STORAGE_KEY, JSON.stringify(payload));
        resolve();
      } catch {
        reject(
          new Error("Could not save file to local storage (quota exceeded?)."),
        );
      }
    };

    reader.onerror = () => reject(new Error("Failed to read file."));
    reader.readAsDataURL(file);
  });
}

export function getCVFromLocalStorage(): StoredCV | null {
  try {
    const raw = localStorage.getItem(CV_STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : null;
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    if (data && data.savedAt >= oneDayAgo) {
      return data;
    } else {
      clearCVFromLocalStorage();
      return null;
    }
  } catch {
    return null;
  }
}

export function clearCVFromLocalStorage(): void {
  localStorage.removeItem(CV_STORAGE_KEY);
}

export function storedCVToFile(stored: StoredCV): File {
  const [, base64] = stored.data.split(",");
  const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
  const blob = new Blob([bytes], { type: stored.type });
  return new File([blob], stored.name, { type: stored.type });
}
