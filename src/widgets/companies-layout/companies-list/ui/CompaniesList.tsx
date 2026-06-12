"use client";
import { useCompaniesQuery, CompanyCard } from "@/entities/company";
import { Error, Loader, Pagination } from "@/shared";
import { List } from "@/widgets/list";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export function CompaniesList() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const listRef = useRef<HTMLDivElement>(null);
  const hasNavigated = useRef(false);

  const page = Number(searchParams.get("page") || "1");

  const { companies, isLoading, error, totalPages } = useCompaniesQuery({
    page,
    pageSize: 12,
  });

  function handlePageChange(newPage: number) {
    hasNavigated.current = true;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    if (hasNavigated.current) {
      listRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  if (isLoading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <Error message="Failed to load companies" />;
  }

  return (
    <div ref={listRef} className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
      <List
        items={companies}
        renderItem={(company) => (
          <CompanyCard company={company} key={company.id} />
        )}
        columnsInLarge={2}
        columnsInMedium={2}
        columnsInSmall={1}
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
