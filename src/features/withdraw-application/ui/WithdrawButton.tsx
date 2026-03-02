"use client";

import { useState } from "react";
import { useWithdrawApplication } from "../model/useWithdrawApplication";
import { Button, ConfirmationModal } from "@/shared";

interface WithdrawButtonProps {
  applicationId: string;
  onSuccess?: () => void;
}

export function WithdrawButton({
  applicationId,
  onSuccess,
}: WithdrawButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate: withdraw, isPending } = useWithdrawApplication();

  const handleConfirm = () => {
    withdraw(applicationId, {
      onSuccess: () => {
        setIsModalOpen(false);
        onSuccess?.();
      },
    });
  };

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        variant="outline"
        className="flex-1"
      >
        Withdraw Application
      </Button>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        title="Withdraw Application"
        message="Are you sure you want to withdraw this application? This action cannot be undone."
        confirmText="Withdraw"
        cancelText="Cancel"
      />
    </>
  );
}
