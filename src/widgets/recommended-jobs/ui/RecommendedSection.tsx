"use client";

import { useState, useMemo } from "react";
import { JobCardJobseeker, useMatchedJobsQuery } from "@/entities/job";
import { List } from "@/widgets/list";
import { LocalFilterBar } from "./LocalFilterBar";
import { matchesTab } from "../lib/matchesTab";
import { buildTabs } from "../lib/buildTabs";
export function RecommendedSection() {
  const { jobs, isLoading, error } = useMatchedJobsQuery({
    page: 1,
    limit: 12,
    enabled: true,
  });
  const [activeTab, setActiveTab] = useState("all");

  console.log("Recommended jobs:", jobs);

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
            Failed to load recommended jobs. Please try again later.
          </p>
        )}

        <p className="text-sm text-text-secondary mb-4">
          {activeCount} job{activeCount !== 1 ? "s" : ""} found
        </p>
        {isLoading ? (
          <p className="text-sm text-text-secondary">
            Loading recommended jobs...
          </p>
        ) : filtered.length === 0 ? (
          <p className="text-sm text-text-secondary">
            No recommended jobs found.
          </p>
        ) : (
          <List
            items={filtered}
            renderItem={(job) => <JobCardJobseeker job={job} key={job.id} />}
          />
        )}
      </div>
    </div>
  );
}
