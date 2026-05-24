import { cn } from "@/shared";
import { useCVDropZoneContext } from "../model/useCVDropZoneContext";
import { UploadCloudIcon } from "lucide-react";
import { ALLOWED_FILE_TYPES } from "../config/config";

export function DropZone() {
  const {
    pendingCV,
    handleDragOver,
    handleDragLeave,
    handleFileDrop,
    handleFileSelect,
    isDragging,
  } = useCVDropZoneContext();

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleFileDrop}
      className={cn(
        "border-2 border-dashed transition-colors duration-200",
        "w-full h-64 rounded-xl p-4 text-center",
        isDragging
          ? "border-primary bg-primary/5"
          : "border-border bg-bg-surface hover:bg-bg-muted hover:border-border/60",
      )}
    >
      <label
        htmlFor="cv-upload"
        className="cursor-pointer w-full h-full flex flex-col items-center justify-center gap-2"
      >
        <UploadCloudIcon
          size={32}
          className={cn("text-text-muted", isDragging && "text-primary")}
        />

        <span className="font-medium text-foreground text-sm">
          {isDragging
            ? "Drop your CV here"
            : pendingCV
              ? "Replace CV — drag & drop or click to upload"
              : "Drag & drop or click to upload"}
        </span>
        <span className="text-xs text-text-muted">PDF or Word · Max 3 MB</span>
      </label>

      <input
        id="cv-upload"
        type="file"
        className="hidden"
        accept={ALLOWED_FILE_TYPES.join(",")}
        onChange={handleFileSelect}
      />
    </div>
  );
}
