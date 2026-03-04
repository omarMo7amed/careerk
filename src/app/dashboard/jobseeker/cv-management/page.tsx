"use client";
import { CVDropZone } from "@/features/upload-cv/ui/CvDropZone";
import { DashboardHeader } from "@/widgets/dashboard-header";

export default function CvManagementPage() {
  return (
    <div>
      <DashboardHeader
        title="CV Management"
        subtitle="Manage your CV , Analyze your CV performance and get insights to improve it"
      />
        <CVDropZone />
    </div>
  );
}
