"use client";

// import { CVDropZone } from "@/features/upload-cv";
import { DashboardHeader } from "@/shared";

import { CVManagementContent } from "@/widgets/cv-management";

export default function CvManagementPage() {
  return (
    <div>
      <div className="px-5 py-8">
        <DashboardHeader
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard/jobseeker/overview" },
            { label: "CV Management" },
          ]}
          title="CV Management"
          subtitle="Manage your CV, analyze your CV performance and get insights to improve it."
        />
      </div>

      <CVManagementContent />
    </div>
  );
}
