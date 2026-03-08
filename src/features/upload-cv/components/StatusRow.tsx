import { formatDistanceToNow, isValid } from "date-fns";
import { StoredCV } from "../types/cvLocalStorage";

export function StatusRow({ pendingCV }: { pendingCV: StoredCV }) {
  if (!pendingCV) return null;

  const savedDate = new Date(pendingCV.savedAt);
  const savedAgo =
    pendingCV.savedAt && isValid(savedDate)
      ? formatDistanceToNow(savedDate, { addSuffix: true })
      : null;

  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Ready to upload &amp; analyze
      </span>
      {savedAgo && (
        <span className="text-xs text-gray-400">Saved {savedAgo}</span>
      )}
    </div>
  );
}
