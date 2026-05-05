"use client";

import { useState } from "react";
import { Modal } from "@/shared";
import { Button } from "@/shared";
import { Lock, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";

export function CTA({
  confirmed,
  confirmCVParse,
}: {
  confirmed: boolean;
  confirmCVParse: () => Promise<void>;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmInModal = async () => {
    setIsLoading(true);
    try {
      await confirmCVParse();
      toast.success("The CV has Confirmed successfully");
      setIsModalOpen(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to confirm CV";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm CV Information"
        maxWidth="sm"
      >
        <div className="space-y-4">
          <p className="text-sm text-text-secondary">
            Are you sure you want to confirm this CV? Once confirmed, all fields
            will be locked and cannot be edited.
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={isLoading}
              onClick={handleConfirmInModal}
            >
              {isLoading ? "Confirming..." : "Confirm"}
            </Button>
          </div>
        </div>
      </Modal>
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
            onClick={handleConfirmClick}
            disabled={isLoading}
            className="shrink-0 flex items-center gap-2"
          >
            <ShieldCheck className="w-5 h-5" />
            {isLoading ? "Confirming..." : "Confirm"}
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
    </div>
  );
}
