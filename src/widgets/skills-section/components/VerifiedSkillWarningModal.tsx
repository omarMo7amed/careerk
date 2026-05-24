import { Modal, Button } from "@/shared";

interface VerifiedSkillWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  skillName: string;
}

export function VerifiedSkillWarningModal({
  isOpen,
  onClose,
  onConfirm,
  skillName,
}: VerifiedSkillWarningModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Remove Verified Skill"
      maxWidth="sm"
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10 border border-warning/25">
          <div className="w-6 h-6 rounded-full bg-warning/15 flex items-center justify-center shrink-0 mt-0.5">
            <svg
              className="w-4 h-4 text-warning"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground text-sm">
              This skill is verified
            </p>
            <p className="text-text-secondary text-sm mt-1">
              Removing "<strong>{skillName}</strong>" will delete your verified
              skill. This action cannot be undone.
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Keep Skill
          </Button>
          <Button
            variant="primary"
            className="bg-warning text-white hover:bg-warning/90 border-warning"
            onClick={onConfirm}
          >
            Remove Anyway
          </Button>
        </div>
      </div>
    </Modal>
  );
}
