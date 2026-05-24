"use client";

import { SearchBar } from "@/features/search";
import { useRouter, useSearchParams } from "next/navigation";

export function ControlPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("search") ?? "";
  const initialLocation = searchParams.get("location") ?? "";

  return (
    <div className="m-5 p-4">
      <SearchBar
        searchPlaceholder="Job Title"
        initialQuery={initialQuery}
        initialLocation={initialLocation}
        onSearchSubmit={(searchValue, locationValue) => {
          const params = new URLSearchParams();
          if (searchValue) params.set("search", searchValue);
          if (locationValue) params.set("location", locationValue);
          params.set("page", "1");

          const currentLimit = searchParams.get("limit");
          if (currentLimit) params.set("limit", currentLimit);

          const queryString = params.toString();
          const nextUrl = `/dashboard/jobseeker/find-jobs${
            queryString ? `?${queryString}` : ""
          }`;
          const currentQueryString = searchParams.toString();
          const currentUrl = `/dashboard/jobseeker/find-jobs${
            currentQueryString ? `?${currentQueryString}` : ""
          }`;

          if (nextUrl === currentUrl) {
            return;
          }

          router.push(nextUrl);
        }}
      />
    </div>
  );
}
