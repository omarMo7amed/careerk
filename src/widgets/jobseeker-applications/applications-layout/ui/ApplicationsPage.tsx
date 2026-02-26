"use client";

import { useApplications } from "@/entities/application";
import { AnimatedSidebar } from "@/shared";
import { useState } from "react";
import { calculateApplicationStatus } from "..";
import { ApplicationDetails } from "../../application-details";
import { ApplicationsHeader } from "./ApplicationHeader";
import { ApplicationsList } from "./ApplicationList";
import { SearchBar } from "@/features/search";

export function ApplicationsPage() {
  const [selectedApplicationId, setSelectedApplicationId] = useState<
    string | null
  >(null);
  const { applications } = useApplications();

  const stats = calculateApplicationStatus(applications);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="space-y-6">
        <ApplicationsHeader stats={stats} />
        <SearchBar />
        <ApplicationsList onViewDetails={setSelectedApplicationId} />
      </div>

      <AnimatedSidebar
        isOpen={!!selectedApplicationId}
        onClose={() => setSelectedApplicationId(null)}
        title="Application Details"
      >
        {selectedApplicationId && (
          <ApplicationDetails
            applicationId={selectedApplicationId}
            onClose={() => setSelectedApplicationId(null)}
          />
        )}
      </AnimatedSidebar>
    </div>
  );
}
