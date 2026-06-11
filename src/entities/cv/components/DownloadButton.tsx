"use client";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useDownloadCV } from "../model/useDownloadCV";

export function DownloadButton({ id }: { id: string }) {
  const { download, isLoading, error, downloadUrl, isSuccess } =
    useDownloadCV();

  // Show error toast when error occurs
  useEffect(() => {
    if (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to download CV",
      );
    }
  }, [error]);

  // Auto-open download when URL is available

  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    download(id);
  };

  return (
    <div className="flex-1 px-3 text-nowrap py-1.5 rounded-md bg-transparent border border-border text-white hover:opacity-90 transition-opacity">
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className="text-primary text-sm text-center w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        aria-label="Download CV"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Downloading...
          </>
        ) : (
          "Download CV"
        )}
      </button>
    </div>
  );
}
