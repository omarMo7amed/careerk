"use client";
import { SectionCard } from "./SectionCard";
import { useUpdateCompanyProfile, CompanySize } from "@/entities/company";
import { useState } from "react";
import toast from "react-hot-toast";
import { KeyInformationEditingMode } from "../components/KeyInformationEditingMode";
import { KeyInformationDisplayMode } from "../components/KeyInformationDisplayMode";
interface KeyInformationFormValues {
  industry: string;
  size: CompanySize | "";
  headquarters: string;
  foundedYear: string;
}
type KeyInformationProps = {
  industry?: string;
  size?: CompanySize;
  headquarters?: string;
  foundedYear?: number;
  isOwner: boolean;
};

export function KeyInformationCard({
  industry,
  size,
  headquarters,
  foundedYear,
  isOwner,
}: KeyInformationProps) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<KeyInformationFormValues>({
    industry: industry ?? "",
    size: size ?? "",
    headquarters: headquarters ?? "",
    foundedYear: foundedYear?.toString() ?? "",
  });
  const { updateProfile, isPending } = useUpdateCompanyProfile();

  function handleSave() {
    updateProfile(
      {
        industry: form.industry,
        size: form.size as CompanySize,
        headquartersLocation: form.headquarters,
        foundedYear: Number(form.foundedYear),
      },
      {
        onSuccess: () => {
          toast.success("Key Informations updated!");
          setEditing(false);
        },
        onError: () => toast.error("Failed to update key informations."),
      },
    );
  }
  if (!form && !isOwner) return null;

  return (
    <SectionCard>
      {editing ? (
        <KeyInformationEditingMode
          value={form}
          isPending={isPending}
          onChange={setForm}
          onSave={handleSave}
          onCancel={() => {
            setEditing(false);
            setForm({
              industry: industry ?? "",
              size: size ?? "",
              headquarters: headquarters ?? "",
              foundedYear: foundedYear?.toString() ?? "",
            });
          }}
        />
      ) : (
        <KeyInformationDisplayMode
          industry={form.industry}
          size={form.size as CompanySize}
          headquarters={form.headquarters}
          foundedYear={Number(form.foundedYear)}
          isOwner={isOwner}
          onEdit={() => setEditing(true)}
        />
      )}
    </SectionCard>
  );
}
