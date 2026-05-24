import { Button } from "@/shared";
import { AlertTriangle, RefreshCw } from "lucide-react";

export function ErrorStatus({
  errorMessage,
  retry,
}: {
  errorMessage: string;
  retry: () => void;
}) {
  return (
    <div className="rounded-2xl border border-error/30 bg-error/5 flex flex-col items-center py-14 gap-4 text-center">
      <AlertTriangle className="w-10 h-10 text-error" />
      <p className="text-text-secondary text-sm">{errorMessage}</p>
      <Button
        variant="outline"
        onClick={retry}
        className="flex items-center gap-2"
      >
        <RefreshCw className="w-4 h-4" /> Retry
      </Button>
    </div>
  );
}
