"use client";
import { SectionCard } from "./SectionCard";
import { useState } from "react";
import toast from "react-hot-toast";
import { AboutUsEditingMode } from "../components/AboutUsEditingMode";
import { AboutUsDisplayMode } from "../components/AboutUsDisplayMode";
import { useUpdateCompanyProfile } from "@/entities/company";
export function AboutUsCard({
  description,
  isOwner,
}: {
  description?: string;
  isOwner: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(description ?? "");
  const { updateProfile, isPending } = useUpdateCompanyProfile();

  function handleSave() {
    updateProfile(
      { description: value },
      {
        onSuccess: () => {
          toast.success("Description updated!");
          setEditing(false);
        },
        onError: () => toast.error("Failed to update description."),
      },
    );
  }
  if (!description && !isOwner) return null;

  return (
    <SectionCard>
      {editing ? (
        <AboutUsEditingMode
          value={value}
          isPending={isPending}
          onChange={setValue}
          onCancel={() => {
            setEditing(false);
            setValue(description ?? "");
          }}
          onSave={handleSave}
        />
      ) : (
        <AboutUsDisplayMode
          description={value}
          isOwner={isOwner}
          onEdit={() => setEditing(true)}
        />
      )}
    </SectionCard>
  );
}
