"use client";

import {
  CVDropZoneProvider,
  DropZoneComponents,
} from "../model/useCVDropZoneContext";

export function CVDropZone() {
  return (
    <CVDropZoneProvider>
      <DropZoneComponents.PendingBanner />
      <DropZoneComponents.DropZone />
      <DropZoneComponents.PreviewModel />
    </CVDropZoneProvider>
  );
}
