"use client";
import { useState } from "react";
import { SectionCard } from "./SectionCard";
import { useUpdateCompanyProfile } from "@/entities/company";
import toast from "react-hot-toast";
import { BenefitsEditingMode } from "../components/BenefitsEditingMode";
import { BenefitsDisplayMode } from "../components/BenefitsDisplayMode";

export function BenefitsCard({
  benefits,
  isOwner,
}: {
  benefits?: string;
  isOwner: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(benefits ?? "");
  const { updateProfile, isPending } = useUpdateCompanyProfile();

  function handleSave() {
    updateProfile(
      { benefits: value },
      {
        onSuccess: () => {
          toast.success("Benefits updated!");
          setEditing(false);
        },
        onError: () => toast.error("Failed to update benefits."),
      },
    );
  }
  if (!benefits && !isOwner) return null;

  return (
    <SectionCard>
      {editing ? (
        <BenefitsEditingMode
          value={value}
          isPending={isPending}
          onChange={setValue}
          onCancel={() => {
            setEditing(false);
            setValue(benefits ?? "");
          }}
          onSave={handleSave}
        />
      ) : (
        <BenefitsDisplayMode
          benefits={value}
          isOwner={isOwner}
          onEdit={() => setEditing(true)}
        />
      )}
    </SectionCard>
  );
}
