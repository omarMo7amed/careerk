import { Trash2, Pencil } from "lucide-react";
import { EducationCard } from "@/entities/education";
import { useEducationContext } from "../model/EducationContext";
import { EditEducationForm } from "./EditEducationForm";
import type { Education } from "@/entities/education";

interface EducationItemProps {
  education: Education;
  index: number;
}

export function EducationItem({ education, index }: EducationItemProps) {
  const {
    isFormVisible,
    editingIndex,
    removeEducation,
    startEditEntry,
    cancelEditEntry,
  } = useEducationContext();

  const isEditingEntry = editingIndex !== null;
  const isThisEntryEditing = editingIndex === index;

  return (
    <div>
      <div className="relative group">
        <EducationCard education={education} />

        {!isEditingEntry && !isFormVisible && (
          <>
            <button
              onClick={() => removeEducation(index)}
              className="absolute top-2 right-2 text-text-muted hover:text-error transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Remove education"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => startEditEntry(index)}
              className="absolute top-2 right-8 text-text-muted hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Edit education"
            >
              <Pencil className="w-4 h-4" />
            </button>
          </>
        )}

        {isThisEntryEditing && (
          <button
            onClick={cancelEditEntry}
            className="absolute top-2 right-2 text-text-muted hover:text-error transition-colors"
            aria-label="Cancel edit"
          >
            <Pencil className="w-4 h-4 text-primary" />
          </button>
        )}
      </div>

      {isThisEntryEditing && <EditEducationForm />}
    </div>
  );
}
