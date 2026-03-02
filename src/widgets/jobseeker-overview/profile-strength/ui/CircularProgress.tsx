function CircularProgress({ percentage }: { percentage: number }) {
  return (
    <div className="flex items-center justify-center p-4 md:p-8">
      <div className="relative w-40 h-40">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `conic-gradient(var(--primary) ${percentage * 3.6}deg, var(--bg-muted) 0deg)`,
          }}
        >
          <div className="absolute inset-3 bg-bg-surface rounded-full flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-primary">
              {percentage}%
            </span>
            <span className="text-xs text-text-secondary">Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CircularProgress;
