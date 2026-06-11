import { Button } from "@/shared";

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
        {isUploading ? "Uploading..." : "Upload & Analyze"}
      </Button>
    </div>
  );
}
