import { ExternalLink } from "lucide-react";

export function ViewJobOverlay() {
  return (
    <div className="absolute inset-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/95">
      <div className="flex items-center gap-2 text-white font-semibold">
        <span>View Job</span>
        <ExternalLink className="w-5 h-5" />
      </div>
    </div>
  );
}
