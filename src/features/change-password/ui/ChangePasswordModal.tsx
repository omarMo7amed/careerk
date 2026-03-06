"use client";

import { Modal } from "@/shared";
import { ChangePasswordForm } from "./ChangePasswordForm";

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChangePasswordModal({
  isOpen,
  onClose,
}: ChangePasswordModalProps) {
  const handleSuccess = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Change Password"
      maxWidth="md"
    >
      <ChangePasswordForm onSuccess={handleSuccess} onCancel={onClose} />
    </Modal>
  );
}
