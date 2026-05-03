"use client";
import { useState } from "react";
import { useUpdateProfile } from "@/entities/job-seeker";
import { toast } from "react-hot-toast";

import { SummaryProps } from "../types/summaryType";
import { DisplayMode } from "../components/DisplayMode";
import { EditingMode } from "../components/EditingMode";
// import {useAuth}from "@/features/auth";
export function Summary({ summary, isOwner }: SummaryProps) {
  // const {token}=useAuth();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(summary ?? "");
  const { updateProfile, isPending } = useUpdateProfile({ token: "" });

  function handleSave() {
    updateProfile(
      { summary: value },
      {
        onSuccess: () => {
          toast.success("Summary updated!");
          setEditing(false);
        },
        onError: () => toast.error("Failed to update summary."),
      },
    );
  }

  if (!summary && !isOwner) return null;

  return (
    <section className="bg-bg-surface rounded-xl border border-border p-6 shadow-sm">
      {editing ? (
        <EditingMode
          value={value}
          isPending={isPending}
          onChange={setValue}
          onCancel={() => {
            setEditing(false);
            setValue(summary ?? "");
          }}
          onSave={handleSave}
        />
      ) : (
        <DisplayMode
          summary={value}
          isOwner={isOwner}
          onEdit={() => setEditing(true)}
        />
      )}
    </section>
  );
}
