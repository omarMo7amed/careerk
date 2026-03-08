"use client";

import { Button } from "@/shared";
import { X } from "lucide-react";

interface FilterSideModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function AnimatedSidebar({
  isOpen,
  onClose,
  children,
  title,
}: FilterSideModalProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/40"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={title ? `Filters for ${title}` : "Filters"}
        className={`fixed top-0 right-0 z-70 h-full w-md max-w-full bg-bg-surface border-l border-border shadow-xl flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={"Close " + (title || "filters")}
            className="p-1.5 rounded-md hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter panels */}
        {children}
      </aside>
    </>
  );
}
