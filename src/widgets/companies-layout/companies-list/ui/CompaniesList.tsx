"use client";
import { CompaniesListing } from "@/entities/company/mock-data/companies";
import { useCompaniesQuery } from "@/entities/company/model/useCompaniesQuery";
import { CompanyCard } from "@/entities/company/ui/CompanyCard";
import Pagination from "@/shared/ui/Pagination";
import { List } from "@/widgets/List";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export function CompaniesList() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const listRef = useRef<HTMLDivElement>(null);

  const page = Number(searchParams.get("page") || "1");

  const { companies, isLoading, error } = useCompaniesQuery({
    page,
    pageSize: 12,
  });

  const totalPages = Math.ceil(CompaniesListing.length / 12);

  console.log(totalPages);

  function handlePageChange(newPage: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    listRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [page]);

  if (isLoading) {
    return <div>Loading companies...</div>;
  }
  return (
    <div ref={listRef} className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
      <List
        items={companies}
        renderItem={(company) => (
          <CompanyCard company={company} key={company.id} />
        )}
      />
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
