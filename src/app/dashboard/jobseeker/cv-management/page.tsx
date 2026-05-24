"use client";

// import { CVDropZone } from "@/features/upload-cv";
import { DashboardHeader } from "@/widgets/dashboard-header";

import { CVManagementContent } from "@/widgets/cv-management";

export default function CvManagementPage() {
  return (
    <div>
      <DashboardHeader
        title="CV Management"
        subtitle="Manage your CV, analyze your CV performance and get insights to improve it"
      />

      <CVManagementContent />
    </div>
  );
}
