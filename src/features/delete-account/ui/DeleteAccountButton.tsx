"use client";
import { useState } from "react";
import { useDeleteAccount } from "../model/useDeleteAccount";
import toast from "react-hot-toast";
import { Button, ConfirmationModal } from "@/shared";

export function DeleteAccountButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate, isPending } = useDeleteAccount();

  const handleConfirm = () => {
    mutate(undefined, {
      onSuccess: () => {
        toast.success("Account deactivated successfully");
        window.location.href = "/";
      },
      onError: (error) => {
        toast.error(error.message || "Failed to deactivate account. Please try again.");
      },
    });
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} disabled={isPending}>Delete Account</Button>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        title="Delete Account"
        message="Once you delete your account, there is no going back. This will permanently delete your profile, all job applications, and associated data."
        confirmText="Delete Account"
        cancelText="Cancel"
      />
    </>
  );
}
