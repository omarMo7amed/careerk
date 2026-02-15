export default function SelectAllButton({
  onSelectAll,
}: {
  onSelectAll: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelectAll}
      className="text-sm text-primary hover:underline cursor-pointer"
    >
      All
    </button>
  );
}
