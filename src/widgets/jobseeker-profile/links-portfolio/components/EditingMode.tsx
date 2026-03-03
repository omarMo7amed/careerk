import { Button, cn } from "@/shared";
import { LINK_FIELDS } from "../constant/fields";
import { useLinksPortfolioContext } from "../model/LinksPortfolioContext";
import { State } from "../types/linksPortfolioReducer";

export function EditingMode() {
  const { state, setField, isPending, handleSave, cancelEdit } =
    useLinksPortfolioContext();

  return (
    <div className="flex flex-col gap-3">
      {LINK_FIELDS.map(({ key, label, Icon, iconClassName }) => {
        return (
          <div key={key} className="flex items-center gap-3">
            <span className="shrink-0">
              <Icon className={cn("w-5 h-5", iconClassName)} />
            </span>
            <span className="text-text-muted w-20 shrink-0 text-sm">
              {label}
            </span>
            <input
              type="url"
              value={state[key as keyof State] ?? ""}
              onChange={(e) => setField(key, e.target.value)}
              placeholder="https://…"
              className="flex-1 rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        );
      })}

      <div className="flex gap-2 justify-end mt-1">
        <Button variant="outline" onClick={cancelEdit} disabled={isPending}>
          Cancel
        </Button>

        <Button variant="primary" onClick={handleSave} disabled={isPending}>
          {isPending ? "Saving…" : "Save"}
        </Button>
      </div>
    </div>
  );
}
