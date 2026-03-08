export function LoadingStatus() {
  return (
    <div className="rounded-2xl border border-border bg-bg-surface flex flex-col items-center py-16 gap-4">
      <div className="relative">
        <div className="w-14 h-14 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
      </div>
      <p className="text-sm font-semibold text-foreground">
        Analyzing your CV…
      </p>
      <p className="text-text-muted text-xs">
        Reading your experience, skills and gaps
      </p>
    </div>
  );
}
