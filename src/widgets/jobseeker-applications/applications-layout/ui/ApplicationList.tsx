"use client";

import { ApplicationListItem, useApplications } from "@/entities/application";
import { TableOfOperation } from "@/features/filter/ui/TableOfOperation";
import {
  AnimatedSidebar,
  Button,
  Empty,
  Error,
  Loader,
  parseMultiParam,
  setMultiParam,
} from "@/shared";
import { List } from "@/widgets/list";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { ApplicationCard } from "./ApplicationCard";

interface ApplicationsListProps {
  onViewDetails: (applicationId: string) => void;
}

export function ApplicationsList({ onViewDetails }: ApplicationsListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("search") ?? searchParams.get("q") ?? "";
  const location = searchParams.get("location") ?? "";
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 12;

  const status = parseMultiParam(searchParams, "status") as string[];
  const dateApplied = parseMultiParam(searchParams, "dateApplied") as string[];
  const workPreference = parseMultiParam(
    searchParams,
    "workPreference",
  ) as string[];

  const { applications, isLoading, error } = useApplications({
    search: query,
    location,
    status,
    dateApplied,
    workPreference,
    page,
    limit,
  });
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-sm text-muted-foreground">
            {applications.length} application
            {applications.length > 1 ? "s" : ""} found
          </span>
        </div>
        <Button variant="outline" size="sm" onClick={() => setFilterOpen(true)}>
          Filters
        </Button>
      </div>
      {isLoading ? <Loader /> : error ? <Error /> : null}
      {applications.length == 0 && (
        <Empty
          message="No applications yet"
          linkText="Browse Jobs"
          linkHref="/dashboard/jobseeker/find-jobs"
        />
      )}
      <List
        items={applications}
        renderItem={(application: ApplicationListItem) => (
          <ApplicationCard
            key={application.id}
            application={application}
            onViewDetails={() => onViewDetails(application.id)}
          />
        )}
        columnsInLarge={2}
      />{" "}
      <AnimatedSidebar
        title="Filter"
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
      >
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <TableOfOperation
            title="Application Status"
            options={[
              "Pending",
              "Reviewed",
              "Shortlisted",
              "Interview Scheduled",
              "Rejected",
              "Hired",
            ]}
            asDropdown={false}
            selected={status}
            onChange={(data) => {
              const params = new URLSearchParams(searchParams.toString());
              setMultiParam(params, "status", data);
              params.set("page", "1");
              router.push(`?${params.toString()}`);
            }}
          />
          <TableOfOperation
            title="Date Applied"
            options={[
              "Last 24 hours",
              "Last 7 days",
              "Last 30 days",
              "All time",
            ]}
            asDropdown={false}
            selected={dateApplied}
            onChange={(data) => {
              const params = new URLSearchParams(searchParams.toString());
              setMultiParam(params, "dateApplied", data);
              params.set("page", "1");
              router.push(`?${params.toString()}`);
            }}
          />
          <TableOfOperation
            title="Work Preference"
            options={["Remote", "On-site", "Hybrid"]}
            asDropdown={false}
            selected={workPreference}
            onChange={(data) => {
              const params = new URLSearchParams(searchParams.toString());
              setMultiParam(params, "workPreference", data);
              params.set("page", "1");
              router.push(`?${params.toString()}`);
            }}
          />
        </div>

        <div className="p-4 border-t border-border flex gap-2 justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFilterOpen(false)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setFilterOpen(false)}
          >
            Apply
          </Button>
        </div>
      </AnimatedSidebar>
    </div>
  );
}
