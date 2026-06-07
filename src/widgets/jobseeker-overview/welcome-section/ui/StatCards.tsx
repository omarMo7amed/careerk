"use client";

import type { StatsCardsData } from "@/widgets/jobseeker-overview/welcome-section";
import { StatCard } from "./StatCard";
import type { StatsCard } from "../types/stats";
import { Loader } from "@/shared";

interface StatCardsProps {
  data: StatsCardsData | null;
  isLoading?: boolean;
}

export function StatCards({ data, isLoading }: StatCardsProps) {
  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-bg-surface rounded-lg p-6 border border-border"
          >
            <p className="text-text-muted text-sm">Loading...</p>
          </div>
        ))}
      </div>
    );
  }

  const cards: StatsCard[] = [
    {
      id: "1",
      title: "Active Applications",
      value: data.activeApplicationsCount,
      icon: "send",
      color: "blue",
    },
    {
      id: "2",
      title: "Recommended Jobs",
      value: data.recommendedJobsCount,
      icon: "star",
      color: "purple",
    },
    {
      id: "3",
      title: "Saved Jobs",
      value: data.savedJobsCount,
      icon: "bookmark",
      color: "orange",
    },
    {
      id: "4",
      title: "Upcoming Interviews",
      value: data.upcomingInterviewsCount,
      icon: "calendar",
      color: "green",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <StatCard key={card.id} card={card} />
      ))}
    </div>
  );
}
