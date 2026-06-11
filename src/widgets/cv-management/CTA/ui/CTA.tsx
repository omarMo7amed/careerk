"use client";

import { useState } from "react";
import { Modal, Button } from "@/shared";
import { Lock, ShieldCheck, RotateCcw } from "lucide-react";
import toast from "react-hot-toast";
import { useConfirmCVParse, useRestoreCVParse } from "@/entities/cv";

/* eslint-disable @typescript-eslint/no-explicit-any */

export function CTA({
  isConfirmed,
  isUpdatePending,
  isFirstUpload,
}: {
  isConfirmed: boolean;
  isUpdatePending: boolean;
  isFirstUpload: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { confirmCVParse, isLoading, error } = useConfirmCVParse();
  const { restoreCVParse, isLoading: isRestoreLoading } = useRestoreCVParse();

  console.log("error", error);

  const handleConfirmClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmInModal = async () => {
    try {
      await confirmCVParse();
      toast.success("The CV has Confirmed successfully");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to confirm CV";
      toast.error(errorMessage);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleRestore = async () => {
    try {
      await restoreCVParse();
      toast.success("Previous profile restored. You can now upload a new CV.");
      setIsModalOpen(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to restore previous profile";
      toast.error(errorMessage);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          isUpdatePending ? "Update Profile from CV" : "Confirm CV Information"
        }
        maxWidth="sm"
      >
        <div className="space-y-4">
          {isUpdatePending ? (
            <>
              <p className="text-sm text-text-secondary">
                You have a profile already. Would you like to restore your
                previous profile or confirm the new parsed data from this CV?
              </p>
              <div className="space-y-2">
                <Button
                  variant="secondary"
                  disabled={isLoading || isRestoreLoading}
                  onClick={handleRestore}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  {isRestoreLoading
                    ? "Restoring..."
                    : "Restore Previous Profile"}
                </Button>
                <Button
                  variant="primary"
                  disabled={isLoading || isRestoreLoading}
                  onClick={handleConfirmInModal}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  {isLoading ? "Confirming..." : "Confirm New Data"}
                </Button>
              </div>
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  disabled={isLoading || isRestoreLoading}
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-text-secondary">
                Are you sure you want to confirm this CV? Once confirmed, some
                fields will be locked and cannot be edited.
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
            </>
          )}
        </div>
      </Modal>

      {/* State 1: Not confirmed (only cv-info or no data) */}
      {isFirstUpload ? (
        <div className="rounded-2xl border border-border bg-bg-surface p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground">Ready to confirm?</p>
            <p className="text-text-secondary text-sm mt-0.5">
              Once confirmed, some fields will be locked and cannot be edited.
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
      ) : isUpdatePending ? (
        /* State 2: Pending (both caches exist) */
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-yellow-900">
              New CV Data Available
            </p>
            <p className="text-yellow-700 text-sm mt-0.5">
              Choose to restore your previous profile or confirm this new data.
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
            Choose
          </Button>
        </div>
      ) : (
        /* State 3: Confirmed (only jobSeekersKeys.me.all) */
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
