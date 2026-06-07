"use client";

import { SectionCard } from "./SectionCard";
import { useUpdateCompanyProfile } from "@/entities/company";
import { useState } from "react";
import toast from "react-hot-toast";
import { LinksDisplayMode } from "../components/LinksDisplayMode";
import { LinksEditingMode } from "../components/LinksEditingMode";

export interface LinksFormValues {
  linkedIn: string;
  facebook: string;
  twitter: string;
}

export function LinksCard({
  links,
  isOwner,
}: {
  links: { linkedIn?: string; facebook?: string; twitter?: string };
  isOwner: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<LinksFormValues>({
    linkedIn: links.linkedIn ?? "",
    facebook: links.facebook ?? "",
    twitter: links.twitter ?? "",
  });
  const { updateProfile, isPending } = useUpdateCompanyProfile();

  function handleSave() {
    updateProfile(
      {
        linkedIn: form.linkedIn ?? "",
        facebook: form.facebook ?? "",
        twitter: form.twitter ?? "",
      },
      {
        onSuccess: (response) => {
          if (response.success) {
            toast.success(response.message);
            setEditing(false);
          }
        },
        onError: (error) => {
          toast.error(error?.message || "Failed to update links.");
        },
      },
    );
  }
  if (!form && !isOwner) return null;

  return (
    <SectionCard>
      {editing ? (
        <LinksEditingMode
          value={form}
          isPending={isPending}
          onChange={setForm}
          onSave={handleSave}
          onCancel={() => {
            setEditing(false);
            setForm({
              linkedIn: links.linkedIn ?? "",
              facebook: links.facebook ?? "",
              twitter: links.twitter ?? "",
            });
          }}
        />
      ) : (
        <LinksDisplayMode
          links={form}
          isOwner={isOwner}
          onEdit={() => setEditing(true)}
        />
      )}
    </SectionCard>
  );
}
