"use client";

import { useState, useMemo } from "react";
import { JobCardJobseeker, useMatchedJobsQuery } from "@/entities/job";
import { List } from "@/widgets/list";
import { Card, Empty } from "@/shared";
import { LocalFilterBar } from "./LocalFilterBar";
import { matchesTab } from "../lib/matchesTab";
import { buildTabs } from "../lib/buildTabs";

function SkeletonCard() {
  return (
    <Card className="p-4 space-y-3">
      <div className="h-5 w-3/4 rounded bg-bg-muted animate-pulse" />
      <div className="h-3 w-1/2 rounded bg-bg-muted animate-pulse" />
      <div className="h-3 w-full rounded bg-bg-muted animate-pulse" />
      <div className="h-8 w-24 rounded bg-bg-muted animate-pulse mt-2" />
    </Card>
  );
}

export function RecommendedSection() {
  const { jobs, isLoading, error } = useMatchedJobsQuery({
    page: 1,
    limit: 12,
    enabled: true,
  });

  const [activeTab, setActiveTab] = useState("all");

  const tabs = useMemo(() => buildTabs(jobs ?? []), [jobs]);

  const filtered = useMemo(() => {
    if (!jobs) return [];
    return jobs.filter((job) => matchesTab(job, activeTab));
  }, [jobs, activeTab]);

  const activeCount = tabs.find((t) => t.key === activeTab)?.count ?? 0;

  return (
    <div className="flex flex-col">
      <LocalFilterBar tabs={tabs} active={activeTab} onChange={setActiveTab} />

      <div className="p-5">
        {error && (
          <p className="mb-4 text-sm text-error">
            {error instanceof Error ? error.message : "Failed to load recommended jobs"}
          </p>
        )}

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <Empty
            message="No recommended jobs found"
            linkHref="/dashboard/jobseeker/find-jobs"
            linkText="Browse Jobs"
          />
        ) : (
          <>
            <p className="text-sm text-text-secondary mb-4">
              {activeCount} job{activeCount !== 1 ? "s" : ""} found
            </p>
            <List
              items={filtered}
              renderItem={(job) => <JobCardJobseeker job={job} key={job.id} />}
            />
          </>
        )}
      </div>
    </div>
  );
}
