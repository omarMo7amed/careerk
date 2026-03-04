"use client";

import {
  Trash2Icon,
  UploadCloudIcon,
  BrainCircuitIcon,
  LoaderCircleIcon,
} from "lucide-react";
import { Button, cn } from "@/shared";
import { useCVDropZoneContext } from "../model/useCVDropZoneContext";
import { StatusRow } from "../components/StatusRow";
import { FileInfo } from "../components/FileInfo";

export function CVPendingBanner() {
  const {
    pendingCV,
    discard,
    isPendingUploading,
    pendingUploadError,
    uploadToServer,
  } = useCVDropZoneContext();

  if (!pendingCV) return null;

  return (
    <div className="w-full rounded-xl border border-blue-200 bg-blue-50 p-4">
      <StatusRow pendingCV={pendingCV} />

      <div className="flex items-center justify-between gap-3">
        <FileInfo pendingCV={pendingCV} />
        {/* Actions but i زهقت */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={discard}
            disabled={isPendingUploading}
            title="Discard"
            aria-label="discard cv"
            className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors disabled:opacity-40"
          >
            <Trash2Icon size={20} />
          </button>

          <Button
            onClick={() => uploadToServer()}
            disabled={isPendingUploading}
            className={cn(
              "inline-flex items-center gap-1.5",
              "disabled:opacity-60 disabled:cursor-not-allowed",
            )}
          >
            {isPendingUploading ? (
              <>
                <LoaderCircleIcon size={14} className="animate-spin" />
                Uploading…
              </>
            ) : (
              <>
                <UploadCloudIcon size={14} />
                Upload &amp; Analyze
              </>
            )}
          </Button>
        </div>
      </div>

      {!isPendingUploading && !pendingUploadError && (
        <p className="mt-3 flex items-center gap-1.5 text-xs text-indigo-500">
          <BrainCircuitIcon size={13} />
          Our AI will extract your skills, experience, and education
          automatically.
        </p>
      )}

      {pendingUploadError && (
        <p className="mt-2 text-xs text-red-600">{pendingUploadError}</p>
      )}
    </div>
  );
}
