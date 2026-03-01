export function Error() {
  return (
    <div className="text-center py-12">
      <p className="text-error mb-2">Failed to load</p>
      <button
        onClick={() => window.location.reload()}
        className="text-sm text-primary hover:underline"
      >
        Try again
      </button>
    </div>
  );
}
