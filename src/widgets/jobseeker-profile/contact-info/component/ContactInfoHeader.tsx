import { Pencil, X } from "lucide-react";
import { useContactInfoContext } from "../model/ContactInfoContext";

export function ContactInfoHeader() {
  const { isOwner, editing, startEdit, cancelEdit } = useContactInfoContext();

  return (
    <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
      Contact Info
      {isOwner && !editing && (
        <button
          onClick={startEdit}
          className="ml-auto text-text-muted hover:text-primary transition-colors"
          aria-label="Edit contact info"
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
