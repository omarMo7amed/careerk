import { ExternalLink } from "lucide-react";
import { LinkRowProps } from "../types/types";

export function LinkRow({
  icon,
  label,
  url,
  iconColor = "text-primary",
}: LinkRowProps) {
  if (!url) return null;

  const display = url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg bg-bg-muted border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group"
    >
      <span className={`shrink-0 ${iconColor}`}>{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-text-muted">{label}</p>
        <p className="text-sm text-foreground truncate group-hover:text-primary transition-colors">
          {display}
        </p>
      </div>
      <ExternalLink className="w-3.5 h-3.5 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
    </a>
  );
}
