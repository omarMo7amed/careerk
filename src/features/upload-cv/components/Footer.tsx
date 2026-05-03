import { Button } from "@/shared";
import { Circle } from "lucide-react";

export default function Footer({
  isUploading,
  onConfirm,
  onClose,
}: {
  isUploading: boolean;
  onConfirm: () => void;
  onClose: () => void;
}) {
  return (
    <div className="flex gap-3 justify-end px-6 py-4 border-t border-border">
      <Button variant="ghost" onClick={onClose} disabled={isUploading}>
        Cancel
      </Button>
      <Button variant="primary" onClick={onConfirm} disabled={isUploading}>
        {isUploading ? (
          <Circle size={20} className="animate-spin text-white" />
        ) : (
          "Upload CV"
        )}
      </Button>
    </div>
  );
}
