"use client";

import { CompanyType, useUpdateCompanyProfile } from "@/entities/company";
import { Banner } from "@/shared";
import { ProfileImage } from "../components/ProfileImage";
import { useState } from "react";
import { HeaderEditingMode } from "../components/HeaderEditingMode";
import { HeaderDisplayMode } from "../components/HeaderDisplayMode";
import toast from "react-hot-toast";
import { HeaderFormValues } from "../types/componentsTypes";

type ProfileHeaderProps = {
  isOwner: boolean;
  headerInfo: {
    name?: string;
    type?: CompanyType;
    logoUrl?: string;
  };
  id: string;
};

export function ProfileHeader({ isOwner, headerInfo, id }: ProfileHeaderProps) {
  const { name, type, logoUrl } = headerInfo;
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState<HeaderFormValues>({
    name: name ?? "",
    type: type ?? "",
  });
  const { updateProfile, isPending } = useUpdateCompanyProfile();

  function startEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    updateProfile(
      {
        id,
        name: form.name,
        type: form.type ? (form.type as CompanyType) : undefined,
      },
      {
        onSuccess: () => {
          toast.success("Header updated!");
          setIsEditing(false);
        },
        onError: () => toast.error("Failed to update header."),
      },
    );
  }

  function handleCancel() {
    setIsEditing(false);
    setForm({
      name: name ?? "",
      type: type ?? "",
    });
  }

  return (
    <div>
      <div className="rounded-b-lg overflow-hidden shadow-sm border border-border">
        {/* Banner */}
        <Banner />

        <div className="bg-bg-surface px-6 pb-4 flex flex-col sm:flex-row gap-4">
          {/* Avatar */}
          <ProfileImage
            id={id}
            name={name || ""}
            profileImageUrl={logoUrl}
            isOwner={isOwner}
          />
          {/* Info */}
          <div className="flex-1 pt-2">
            {isEditing ? (
              <HeaderEditingMode
                value={form}
                isPending={isPending}
                onChange={setForm}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            ) : (
              <HeaderDisplayMode
                name={form.name}
                type={form.type as CompanyType}
                isOwner={isOwner}
                onEdit={startEdit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
