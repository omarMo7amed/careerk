"use client";

import { useApplications } from "@/entities/application";
import { AnimatedSidebar } from "@/shared";
import { useState } from "react";
import { calculateApplicationStatus } from "..";
import { ApplicationDetails } from "../../application-details";
import { ApplicationsHeader } from "./ApplicationHeader";
import { ApplicationsList } from "./ApplicationList";
import { SearchBar } from "@/features/search";
import { useRouter, useSearchParams } from "next/navigation";

export function ApplicationsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("search") ?? "";
  const initialLocation = searchParams.get("location") ?? "";

  const [selectedApplicationId, setSelectedApplicationId] = useState<
    string | null
  >(null);
  const { applications } = useApplications();

  const stats = calculateApplicationStatus(applications);

  return (
    <div className="w-full mx-auto p-4 md:p-8">
      <div className="space-y-6">
        <ApplicationsHeader stats={stats} />
        <SearchBar
          searchPlaceholder="Search Applications"
          initialQuery={initialQuery}
          initialLocation={initialLocation}
          onSearchSubmit={(searchValue, locationValue) => {
            const params = new URLSearchParams();
            if (searchValue) params.set("search", searchValue);
            if (locationValue) params.set("location", locationValue);
            params.set("page", "1");
            router.push(`?${params.toString()}`);
          }}
        />
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
