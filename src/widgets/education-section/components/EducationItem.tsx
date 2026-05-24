"use client";
import { useState } from "react";
import { Trash2, Pencil } from "lucide-react";
import { EducationCard } from "@/entities/education";
import { useEducationContext } from "../model/EducationContext";
import { EditEducationForm } from "./EditEducationForm";
import { Button, Modal } from "@/shared";
import type { Education } from "@/entities/education";

interface EducationItemProps {
  education: Education;
  index: number;
}

export function EducationItem({ education, index }: EducationItemProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const {
    isOwner,
    isAddingVisible,
    updatingIndex,
    removeEducation,
    startEditEntry,
    cancelEditEntry,
  } = useEducationContext();

  const isUpdatingEntry = updatingIndex !== null;
  const isThisEntryUpdating = updatingIndex === index;

  return (
    <div>
      <div className="relative group">
        <EducationCard education={education} />

        {isOwner && !isUpdatingEntry && !isAddingVisible && (
          <>
            <button
              onClick={() => setIsDeleteModalOpen(true)}
              className="absolute top-2 right-2 text-text-muted hover:text-error transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Remove education"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => startEditEntry(index, education)}
              className="absolute top-2 right-8 text-text-muted hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Edit education"
            >
              <Pencil className="w-4 h-4" />
            </button>
          </>
        )}

        {isOwner && isThisEntryUpdating && (
          <button
            onClick={cancelEditEntry}
            className="absolute top-2 right-2 text-text-muted hover:text-error transition-colors"
            aria-label="Cancel edit"
          >
            <Pencil className="w-4 h-4 text-primary" />
          </button>
        )}
      </div>

      {isThisEntryUpdating && <EditEducationForm />}

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Education"
        maxWidth="sm"
      >
        <div className="space-y-4">
          <p className="text-sm text-text-secondary">
            Are you sure you want to remove this education entry?
          </p>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="outline"
              className="text-error border-error hover:bg-error/10"
              onClick={() => {
                removeEducation(education?.id || index.toString());
                setIsDeleteModalOpen(false);
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
