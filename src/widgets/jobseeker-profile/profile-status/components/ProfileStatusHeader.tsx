import { Pencil, X } from "lucide-react";
import { useProfileStatusContext } from "../model/ProfileStatusContext";

export function ProfileStatusHeader() {
  const { isOwner, editing, startEdit, cancelEdit } = useProfileStatusContext();

  return (
    <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
      Profile Status
      {isOwner && !editing && (
        <button
          onClick={startEdit}
          className="ml-auto text-text-muted hover:text-primary transition-colors"
          aria-label="Edit profile status"
        >
          <Pencil className="w-4 h-4" />
        </button>
      )}
      {isOwner && editing && (
        <button
          onClick={cancelEdit}
          className="ml-auto text-text-muted hover:text-destructive transition-colors"
          aria-label="Cancel editing"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </h2>
  );
}
