"use client";
import { useCandidatesQuery } from "@/entities/job-seeker";
// import { getCandidates } from "@/entities/job-seeker/api/getCandidates";
import { SearchBar } from "@/features/search";
import { useRouter, useSearchParams } from "next/navigation";

export function HeroSection() {
  const router = useRouter();
  const isLoading = useCandidatesQuery({}).isLoading;
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("search") ?? "";
  const initialLocation = searchParams.get("location") ?? "";
  return (
    <section
      className="relative border-b border-border py-12 "
      style={{
        backgroundImage: "url(/candidates-page/candidates-hero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-7xl mx-auto p-4 text-center">
        <h1 className="text-white mb-4">Find Top Talent</h1>
        <p className="text-lg text-white mb-8">
          Search and connect with the best candidates for your job openings.
        </p>
      </div>

      <SearchBar
        searchPlaceholder="Job Title , Name or Skills"
        // type="candidates"
        initialQuery={initialQuery}
        initialLocation={initialLocation}
        isLoading={isLoading}
        onSearchSubmit={(searchValue, locationValue) => {
          const params = new URLSearchParams();
          if (searchValue) params.set("search", searchValue);
          if (locationValue) params.set("location", locationValue);
          params.set("page", "1");

          const currentLimit = searchParams.get("limit");
          if (currentLimit) params.set("limit", currentLimit);

          const queryString = params.toString();
          const nextUrl = `/candidates${queryString ? `?${queryString}` : ""}`;
          const currentQueryString = searchParams.toString();
          const currentUrl = `/candidates${
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
