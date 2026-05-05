"use client";

import { createContext, useContext } from "react";
import { useCVUpload } from "./useCvUpload";
import { CVPreviewModal } from "../ui/CVPreviewModal";
import { CVPendingBanner } from "../ui/CVPendingBanner";
import { DropZone } from "../components/DropZone";

import { CVDropZoneContextType } from "../types/useCVDropZoneContext";

const CVDropZoneContext = createContext<CVDropZoneContextType | null>(null);

export function CVDropZoneProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cvUpload = useCVUpload();

  return (
    <CVDropZoneContext.Provider value={cvUpload}>
      <section className="w-full flex flex-col gap-3">{children}</section>
    </CVDropZoneContext.Provider>
  );
}

export function useCVDropZoneContext() {
  const ctx = useContext(CVDropZoneContext);
  if (!ctx) {
    throw new Error(
      "useCVDropZoneContext must be used within a CVDropZoneProvider",
    );
  }
  return ctx;
}

function PreviewModel() {
  const { isModalOpen, state } = useCVDropZoneContext();
  if (!isModalOpen || !state.file || !state.previewUrl) return null;
  return <CVPreviewModal />;
}

function PendingBanner() {
  const { pendingCV } = useCVDropZoneContext();
  if (!pendingCV) return null;
  return <CVPendingBanner />;
}

export const DropZoneComponents = {
  PreviewModel,
  PendingBanner,
  DropZone,
};
