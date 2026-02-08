"use client";
import { ComposedSearchBar } from "@/shared";

export function JobSearch() {
  return (
    <div className="flex items-center justify-center">
      <div className="min-w-80">
        <ComposedSearchBar searchPlaceholder="Job title" />
      </div>
    </div>
  );
}
