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
      onSuccess: (data) => {
        if (data.success) {
          toast.success(data.message || "Account deleted successfully");
          window.location.href = "/";
        } else {
          toast.error(data.error.message);
        }
      },
      onError: (error) => {
        console.error("Delete account error:", error);
        toast.error("Failed to delete account. Please try again.");
      },
    });
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Delete Account</Button>

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
