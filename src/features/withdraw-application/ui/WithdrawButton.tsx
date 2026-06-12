"use client";

import { Button, ConfirmationModal } from "@/shared";
import { useState } from "react";
import { useWithdrawApplication } from "../model/useWithdrawApplication";

interface WithdrawButtonProps {
  applicationId: string;
}

export function WithdrawButton({ applicationId }: WithdrawButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate: withdraw, isPending } = useWithdrawApplication();

  const handleConfirm = () => {
    withdraw(applicationId, {
      onSuccess: () => {
        setIsModalOpen(false);
      },
    });
  };

  return (
    <>
      <Button
        disabled={isPending}
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
        isProcessing={isPending}
      />
    </>
  );
}
