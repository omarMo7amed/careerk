"use client";

import PreviewArea from "../components/PreviewArea";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { useCVDropZoneContext } from "../model/useCVDropZoneContext";

export function CVPreviewModal() {
  const { state, isPendingUploading, handleCloseModal, uploadToServer } =
    useCVDropZoneContext();

  const { file, previewUrl, error } = state;
  if (!file || !previewUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={!isPendingUploading ? handleCloseModal : undefined}
      />

      <div className="relative bg-bg-surface rounded-2xl shadow-2xl w-full max-w-3xl mx-4 flex flex-col overflow-hidden max-h-[90vh]">
        <Header
          file={file}
          isUploading={isPendingUploading}
          onClose={handleCloseModal}
        />

        <PreviewArea previewUrl={previewUrl || ""} file={file} />

        {error && (
          <div className="px-6 py-3 bg-error/5 border-t border-error/20">
            <p className="text-sm text-error">{error}</p>
          </div>
        )}

        <Footer
          isUploading={isPendingUploading}
          onConfirm={uploadToServer}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}
