import { Link2, Pencil, X } from "lucide-react";
import { useLinksPortfolioContext } from "../model/LinksPortfolioContext";

export function LinksPortfolioHeader() {
  const { isOwner, editing, startEdit, cancelEdit } =
    useLinksPortfolioContext();

  return (
    <h2 className="text-base font-semibold text-foreground flex items-center gap-2 mb-4">
      <Link2 className="w-4 h-4 text-primary" />
      Links &amp; Portfolio
      {isOwner && !editing && (
        <button
          onClick={startEdit}
          className="ml-auto text-text-muted hover:text-primary transition-colors"
          aria-label="Edit links"
        >
          <Pencil className="w-4 h-4" />
        </button>
      )}
      {isOwner && editing && (
        <button
          onClick={cancelEdit}
          className="ml-auto text-text-muted hover:text-destructive transition-colors"
          aria-label="Cancel"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </h2>
  );
}
