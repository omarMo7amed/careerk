export default function ClearButton({ onClear }: { onClear: () => void }) {
  return (
    <button
      type="button"
      onClick={onClear}
      className="text-sm text-foreground/70 hover:text-foreground cursor-pointer"
    >
      Clear
    </button>
  );
}
