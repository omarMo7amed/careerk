import { GraduationCap, Pencil, X } from "lucide-react";
import { useEducationContext } from "../model/EducationContext";

export function EducationHeader() {
  const { isOwner, editing, startEdit, cancelEdit } = useEducationContext();

  return (
    <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-5">
      <GraduationCap className="w-4 h-4 text-primary" />
      Education
      {isOwner && !editing && (
        <button
          onClick={startEdit}
          className="ml-auto text-text-muted hover:text-primary transition-colors"
          aria-label="Edit education"
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
