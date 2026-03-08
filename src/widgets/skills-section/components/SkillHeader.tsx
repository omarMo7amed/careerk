import { Sparkles, Pencil, X } from "lucide-react";
import { useSkillsContext } from "../model/SkillsContext";

export function SkillHeader() {
  const { isOwner, editing, startEdit, cancelEdit } = useSkillsContext();

  return (
    <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-4">
      <Sparkles className="w-4 h-4 text-primary" />
      Skills
      {isOwner && !editing && (
        <button
          onClick={startEdit}
          className="ml-auto text-text-muted hover:text-primary transition-colors"
          aria-label="Edit skills"
        >
          <Pencil className="w-4 h-4" />
        </button>
      )}
      {isOwner && editing && (
        <button
          onClick={cancelEdit}
          className="ml-auto text-text-muted hover:text-primary transition-colors"
          aria-label="Cancel editing"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </h2>
  );
}
