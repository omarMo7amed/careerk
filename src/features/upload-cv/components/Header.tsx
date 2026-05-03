import { X } from "lucide-react";

export interface HeaderProps {
  file: File;
  isUploading: boolean;
  onClose: () => void;
}
export function Header({ file, isUploading, onClose }: HeaderProps) {
  const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-border">
      <div className="flex flex-col gap-0.5 min-w-0 pr-4">
        <h2 className="text-lg font-semibold text-foreground">CV Preview</h2>
        <p className="text-sm text-text-muted truncate">
          {file.name}
          <span className="ml-2 text-text-foreground">({fileSizeMB} MB)</span>
        </p>
      </div>
      <button
        onClick={onClose}
        disabled={isUploading}
        className="p-1.5 rounded-full hover:bg-bg-muted transition-colors disabled:opacity-40 shrink-0"
        aria-label="Close preview"
      >
        <X size={20} className="text-text-muted" />
      </button>
    </div>
  );
}
