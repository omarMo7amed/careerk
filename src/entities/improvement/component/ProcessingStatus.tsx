import { Loader2 } from "lucide-react";

export function ProcessingStatus() {
  return (
    <div className="rounded-2xl border border-border bg-bg-muted flex flex-col items-center py-16 gap-5">
      <div className="w-14 h-14 rounded-full border-4 border-border border-t-warning animate-spin" />
      <div className="text-center">
        <span className="inline-flex items-center gap-2 bg-bg-surface border border-border text-foreground px-5 py-2 rounded-full text-sm font-bold animate-pulse">
          <Loader2 className="w-3.5 h-3.5 animate-spin" /> Processing your
          report…
        </span>
        <p className="text-text-secondary text-xs mt-2">
          This may take up to 5 minutes. We appreciate your patience!
        </p>
      </div>
    </div>
  );
}
