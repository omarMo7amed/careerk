"use client";

import { SearchBar } from "@/features/search";
import { useRouter, useSearchParams } from "next/navigation";

export function HeroSection() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("search") ?? "";
  const initialLocation = searchParams.get("location") ?? "";

  return (
    <section
      className="relative border-b border-border py-12 "
      style={{
        backgroundImage: "url(/jobs-page/jobs-hero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-7xl mx-auto p-4 text-center">
        <h1 className="text-white mb-4">Find Your Dream Job</h1>
        <p className="text-lg text-white mb-8">
          Explore thousands of job opportunities and take the next step in your
          career.
        </p>
      </div>

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
          const nextUrl = `/jobs${queryString ? `?${queryString}` : ""}`;
          const currentQueryString = searchParams.toString();
          const currentUrl = `/jobs${
            currentQueryString ? `?${currentQueryString}` : ""
          }`;

          if (nextUrl === currentUrl) {
            return;
          }

          router.push(nextUrl);
        }}
      />
    </section>
  );
}
