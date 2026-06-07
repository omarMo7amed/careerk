"use client";

import { ApplicationListItem, useApplications } from "@/entities/application";
import { useOverview } from "@/entities/job-seeker";
import { useMemo } from "react";

import {
  ProfileStrength,
  ProfileStrengthData,
} from "@/widgets/jobseeker-overview/profile-strength";
import { QuickActions } from "@/widgets/jobseeker-overview/quick-actions";
import {
  RecentActivity,
  RecentActivityItem,
} from "@/widgets/jobseeker-overview/recent-activity";
import { SavedJobsSection } from "@/widgets/jobseeker-overview/saved-jobs";
import {
  StatCards,
  StatsCardsData,
  WelcomeBanner,
} from "@/widgets/jobseeker-overview/welcome-section";

export function JobSeekerOverviewWidget() {
  const token = "1234";
  const {
    applications,
    isLoading: applicationsLoading,
    error: applicationsError,
  } = useApplications({ limit: 100 });
  const {
    overview,
    isLoading: overviewLoading,
    error: overviewError,
  } = useOverview(token ? { token } : { token: null });

  const isLoading = applicationsLoading || overviewLoading;
  const error = applicationsError || overviewError;

  //Stats Cards Data
  const statsData: StatsCardsData | null = useMemo(() => {
    if (!overview) return null;

    const activeApplicationsCount = applications.filter(
      (app: ApplicationListItem) =>
        app.status !== "WITHDRAWN" &&
        app.status !== "REJECTED" &&
        app.status !== "HIRED",
    ).length;

    const upcomingInterviewsCount = applications.filter(
      (app: ApplicationListItem) => app.status === "INTERVIEW_SCHEDULED",
    ).length;

    return {
      activeApplicationsCount,
      recommendedJobsCount: overview.recommendedJobsCount,
      savedJobsCount: overview.savedJobsCount,
      upcomingInterviewsCount,
    };
  }, [overview, applications]);

  //Profile Strength Data
  const profileStrengthData: ProfileStrengthData | null = useMemo(() => {
    if (!overview) return null;

    const items = [
      overview.hasProfile,
      overview.hasProfile,
      !!overview.profileImageUrl,
      !!overview.linkedIn,
      !!overview.github,
    ];

    const completedCount = items.filter(Boolean).length;
    const completionPercentage = Math.round(
      (completedCount / items.length) * 100,
    );

    return {
      hasProfile: overview.hasProfile,
      profileImageUrl: overview.profileImageUrl,
      hasLinkedIn: !!overview.linkedIn,
      hasGithub: !!overview.github,
      completionPercentage,
    };
  }, [overview]);

  //Recent Activities
  const recentActivities: RecentActivityItem[] = useMemo(() => {
    if (applications.length === 0) return [];

    const sorted = [...applications].sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    );

    return sorted.slice(0, 10).map((app) => {
      let type: RecentActivityItem["type"];
      const isNew =
        new Date(app.appliedAt).getTime() === new Date(app.updatedAt).getTime();

      if (isNew) {
        type = "APPLICATION_SUBMITTED";
      } else if (app.status === "INTERVIEW_SCHEDULED") {
        type = "INTERVIEW_SCHEDULED";
      } else if (app.status === "WITHDRAWN") {
        type = "APPLICATION_WITHDRAWN";
      } else if (app.status === "REJECTED") {
        type = "APPLICATION_REJECTED";
      } else if (app.status === "HIRED") {
        type = "APPLICATION_ACCEPTED";
      } else {
        type = "STATUS_CHANGED";
      }

      return {
        id: `activity-${app.id}`,
        type,
        applicationId: app.id,
        jobTitle: app.directJob.title,
        companyName: app.directJob.company.name,
        companyLogoUrl: app.directJob.company.logoUrl,
        timestamp: app.updatedAt,
        newStatus: app.status,
      };
    });
  }, [applications]);

  return (
    <div className="space-y-8 p-6">
      {/* Welcome Banner */}
      <WelcomeBanner
        firstName={overview?.firstName}
        profileImageUrl={overview?.profileImageUrl}
      />

      {/* Stats Cards */}
      <StatCards data={statsData} isLoading={isLoading} />

      {/* Profile Strength + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <ProfileStrength data={profileStrengthData} isLoading={isLoading} />
        <RecentActivity activities={recentActivities} isLoading={isLoading} />
      </div>

      {/* Saved Jobs Section */}
      <SavedJobsSection />

      {/* Quick Actions */}
      <QuickActions />
    </div>
  );
}
