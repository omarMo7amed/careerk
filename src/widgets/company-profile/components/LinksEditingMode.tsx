import { Button } from "@/shared";

import { Linkedin, Facebook, Twitter } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LinksEditingModeProps } from "../types/componentsTypes";

export function LinksEditingMode({
  value,
  isPending,
  onChange,
  onSave,
  onCancel,
}: LinksEditingModeProps) {
  const field = (
    label: string,
    Icon: LucideIcon,
    children: React.ReactNode,
  ) => (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-primary shrink-0" />
      <label className="text-sm text-text-muted w-20">{label}</label>

      {children}
    </div>
  );
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {field(
          "LinkedIn",
          Linkedin,
          <input
            type="url"
            value={value.linkedIn}
            onChange={(e) => onChange({ ...value, linkedIn: e.target.value })}
            placeholder="https://…"
            className="flex-1 rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />,
        )}
      </div>
      <div className="flex items-center gap-3">
        {field(
          "Facebook",
          Facebook,
          <input
            type="url"
            value={value.facebook}
            onChange={(e) => onChange({ ...value, facebook: e.target.value })}
            placeholder="https://…"
            className="flex-1 rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />,
        )}
      </div>
      <div className="flex items-center gap-3">
        {field(
          "Twitter",
          Twitter,
          <input
            type="url"
            value={value.twitter}
            onChange={(e) => onChange({ ...value, twitter: e.target.value })}
            placeholder="https://…"
            className="flex-1 rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />,
        )}
      </div>

      <div className="flex gap-2 justify-end mt-1">
        <Button variant="outline" onClick={onCancel} disabled={isPending}>
          Cancel
        </Button>

        <Button variant="primary" onClick={onSave} disabled={isPending}>
          {isPending ? "Saving…" : "Save"}
        </Button>
      </div>
    </div>
  );
}
