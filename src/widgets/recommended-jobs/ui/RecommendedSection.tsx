"use client";

import { useState, useMemo } from "react";
import { JobCardJobseeker, useJobsQuery } from "@/entities/job";
import { List } from "@/widgets/List";
import { LocalFilterBar } from "./LocalFilterBar";
import { matchesTab } from "../lib/matchesTab";
import { buildTabs } from "../lib/buildTabs";

export function RecommendedSection() {
  const { jobs } = useJobsQuery();
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
        <p className="text-sm text-text-secondary mb-4">
          {activeCount} job{activeCount !== 1 ? "s" : ""} found
        </p>
        <List
          items={filtered}
          renderItem={(job) => <JobCardJobseeker job={job} key={job.id} />}
        />
      </div>
    </div>
  );
}
