"use client";
import { Toggle } from "@/shared/ui/Toggle";
import type { LucideIcon } from "lucide-react";

interface NotificationToggleProps {
  id: string;
  label: string;
  description: string;
  icon?: LucideIcon;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  disabled?: boolean;
}

export function NotificationToggle({
  label,
  description,
  icon: Icon,
  enabled,
  onToggle,
  disabled,
}: NotificationToggleProps) {
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

      <Toggle enabled={enabled} onChange={onToggle} disabled={disabled} />
    </div>
  );
}
