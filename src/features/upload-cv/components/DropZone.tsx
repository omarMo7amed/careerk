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
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400",
      )}
    >
      <label
        htmlFor="cv-upload"
        className="cursor-pointer w-full h-full flex flex-col items-center justify-center gap-2"
      >
        <UploadCloudIcon
          size={32}
          className={cn("text-gray-400", isDragging && "text-blue-500")}
        />

        <span className="font-medium text-gray-700 text-sm">
          {isDragging
            ? "Drop your CV here"
            : pendingCV
              ? "Replace CV — drag & drop or click to upload"
              : "Drag & drop or click to upload"}
        </span>
        <span className="text-xs text-gray-400">PDF or Word · Max 3 MB</span>
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
