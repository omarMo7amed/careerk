"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useUpdateProfile } from "@/entities/job-seeker";
import type { ContactInfoData } from "../types/contactInfoProps";
import type {
  ContactInfoContextValue,
  ContactInfoFieldKey,
} from "../types/contactInfoContextValue";

interface UseContactInfoModelInput {
  contactInfo: ContactInfoData;
  isOwner: boolean;
}

export function useContactInfoModel({
  contactInfo,
  isOwner,
}: UseContactInfoModelInput): ContactInfoContextValue & { isVisible: boolean } {
  const [editing, setEditing] = useState(false);
  const [phone, setPhone] = useState(contactInfo.phone ?? "");
  const [location, setLocation] = useState(contactInfo.location ?? "");
  const { updateProfile, isPending } = useUpdateProfile();

  const isVisible = Boolean(
    isOwner || contactInfo.phone || contactInfo.cvEmail || contactInfo.location,
  );

  const state = {
    phone,
    email: contactInfo.cvEmail ?? "",
    location,
  };

  function setField(key: ContactInfoFieldKey, value: string) {
    if (key === "phone") setPhone(value);
    if (key === "location") setLocation(value);
  }

  function startEdit() {
    setEditing(true);
  }

  function cancelEdit() {
    setEditing(false);
    setPhone(contactInfo.phone ?? "");
    setLocation(contactInfo.location ?? "");
  }

  function handleSave() {
    updateProfile(
      { phone, location },
      {
        onSuccess: () => {
          toast.success("Contact info updated!");
          setEditing(false);
        },
        onError: () => toast.error("Failed to update contact info."),
      },
    );
  }

  return {
    contactInfo,
    isOwner,
    editing,
    startEdit,
    cancelEdit,
    state,
    setField,
    isPending,
    handleSave,
    isVisible,
  };
}
