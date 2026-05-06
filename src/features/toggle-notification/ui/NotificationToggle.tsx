"use client";
import { useState } from "react";
import { Toggle } from "@/shared/ui/Toggle";
import { useToggleNotification } from "../model/useToggleNotification";
import type { LucideIcon } from "lucide-react";
import toast from "react-hot-toast";

interface NotificationToggleProps {
  id: string;
  label: string;
  description: string;
  icon?: LucideIcon;
  defaultEnabled: boolean;
}

export function NotificationToggle({
  id,
  label,
  description,
  icon: Icon,
  defaultEnabled,
}: NotificationToggleProps) {
  const [enabled, setEnabled] = useState(defaultEnabled);
  const { mutate, isPending } = useToggleNotification();

  const handleToggle = (newValue: boolean) => {
    // Optimistic update
    setEnabled(newValue);

    mutate(
      { preferenceId: id, enabled: newValue },
      {
        onSuccess: () => {
          toast.success(`${label} ${newValue ? "enabled" : "disabled"}`);
        },
        onError: () => {
          // Revert on error
          setEnabled(!newValue);
          toast.error(`Failed to update ${label}. Please try again.`);
        },
      },
    );
  };

  return (
    <div className="flex items-center justify-between p-4 bg-bg-surface border border-border rounded-lg hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-3 flex-1">
        {Icon && (
          <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        )}
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-1">{label}</h4>
          <p className="text-sm text-text-secondary">{description}</p>
        </div>
      </div>

      <Toggle enabled={enabled} onChange={handleToggle} disabled={isPending} />
    </div>
  );
}
