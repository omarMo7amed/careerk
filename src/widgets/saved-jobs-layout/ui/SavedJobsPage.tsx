"use client";
import { SearchBar } from "@/features/search";
import { useRouter, useSearchParams } from "next/navigation";
import { SavedJobsList } from "./SavedJobsList";

function SavedJobsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("search") ?? "";
  const initialLocation = searchParams.get("location") ?? "";

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Saved Jobs</h1>
      </div>

      <div className="mb-8 ">
        <SearchBar
          searchPlaceholder="Search saved jobs..."
          initialQuery={initialQuery}
          initialLocation={initialLocation}
          onSearchSubmit={(searchValue, locationValue) => {
            const params = new URLSearchParams(searchParams.toString());
            if (searchValue) {
              params.set("search", searchValue);
            }
            if (locationValue) {
              params.set("location", locationValue);
            }
            params.set("page", "1");
            router.push(`/dashboard/jobseeker/saved-jobs?${params.toString()}`);
          }}
        />
      </div>

      <SavedJobsList />
    </div>
  );
}

export default SavedJobsPage;
