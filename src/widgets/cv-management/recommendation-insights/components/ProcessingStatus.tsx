import { Loader2 } from "lucide-react";

export function ProcessingStatus() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 flex flex-col items-center py-16 gap-5">
      <div className="w-14 h-14 rounded-full border-4 border-amber-200 border-t-amber-500 animate-spin" />
      <div className="text-center">
        <span className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-700 px-5 py-2 rounded-full text-sm font-bold animate-pulse">
          <Loader2 className="w-3.5 h-3.5 animate-spin" /> Processing your
          report…
        </span>
        <p className="text-amber-600/80 text-xs mt-2">
          This may take up to 30 seconds
        </p>
      </div>
    </div>
  );
}
