import { FileTextIcon } from "lucide-react";
import { StoredCV } from "../types/cvLocalStorage";

export function FileInfo({ pendingCV }: { pendingCV: StoredCV }) {
  if (!pendingCV) return null;

  const fileSizeMB = (pendingCV.size / (1024 * 1024)).toFixed(2);

  return (
    <div className="flex items-center gap-2">
      <div className="shrink-0 p-2 bg-white rounded-lg border border-blue-100 shadow-sm">
        <FileTextIcon size={22} className="text-blue-500" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 truncate">
          {pendingCV.name}
        </p>
        <p className="text-xs text-gray-400">{fileSizeMB} MB</p>
      </div>
    </div>
  );
}
