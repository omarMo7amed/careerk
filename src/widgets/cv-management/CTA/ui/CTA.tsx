import { Button } from "@/shared";
import { Lock, ShieldCheck } from "lucide-react";

export function CTA({ confirmed }: { confirmed: boolean }) {
  return (
    <>
      {!confirmed ? (
        <div className="rounded-2xl border border-border bg-bg-surface p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground">Ready to confirm?</p>
            <p className="text-text-secondary text-sm mt-0.5">
              Once confirmed, all fields will be locked and cannot be edited.
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {}}
            className="shrink-0 flex items-center gap-2"
          >
            <ShieldCheck className="w-5 h-5" />
            Confirm &amp; Lock Data
          </Button>
        </div>
      ) : (
        <div className="rounded-2xl bg-success/5 border border-success/25 p-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-success/15 flex items-center justify-center shrink-0">
            <Lock className="w-5 h-5 text-success" />
          </div>
          <div>
            <p className="font-semibold text-success text-sm">
              Data confirmed and locked
            </p>
            <p className="text-text-secondary text-xs mt-0.5">
              Your extracted CV data is saved and cannot be modified.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
