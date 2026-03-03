import { Button } from "@/shared";
import { useProfileHeaderContext } from "../model/ProfileHeaderContext";

export function EditingMode() {
  const {
    editFullName,
    editTitle,
    editLocation,
    isPending,
    setField,
    handleSave,
    cancelEdit,
  } = useProfileHeaderContext();

  return (
    <div className="flex flex-col gap-2">
      <input
        className="rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        value={editFullName}
        onChange={(e) => setField("fullName", e.target.value)}
        placeholder="Your full name"
      />
      <input
        className="rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        value={editTitle}
        onChange={(e) => setField("title", e.target.value)}
        placeholder="Your professional title"
      />
      <input
        className="rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        value={editLocation}
        onChange={(e) => setField("location", e.target.value)}
        placeholder="City, Country"
      />
      <div className="flex gap-2 mt-1">
        <Button
          onClick={cancelEdit}
          disabled={isPending}
          className="disabled:opacity-60"
          variant="outline"
        >
          Cancel
        </Button>

        <Button
          onClick={handleSave}
          disabled={isPending}
          className="disabled:opacity-60"
        >
          {isPending ? "Saving…" : "Save"}
        </Button>
      </div>
    </div>
  );
}
