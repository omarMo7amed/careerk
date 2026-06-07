"use client";

import { Button, Loader } from "@/shared";
import { ArrowRight } from "lucide-react";
import type { ProfileStrengthData } from "@/widgets/jobseeker-overview/profile-strength";
import CircularProgress from "./CircularProgress";
import TaskList from "./TaskList";

interface ProfileStrengthProps {
  data: ProfileStrengthData | null;
  isLoading?: boolean;
}

export function ProfileStrength({ data, isLoading }: ProfileStrengthProps) {
  if (isLoading) {
    return <Loader />;
  }

  const profileTasks = [
    {
      id: "1",
      label: "Complete Personal Information",
      completed: data?.hasProfile ?? false,
    },
    {
      id: "2",
      label: "CV Uploaded",
      completed: data?.hasProfile ?? false,
    },
    {
      id: "3",
      label: "Profile Image Added",
      completed: !!data?.profileImageUrl,
    },
    {
      id: "4",
      label: "LinkedIn Connected",
      completed: data?.hasLinkedIn ?? false,
    },
    {
      id: "5",
      label: "GitHub Connected",
      completed: data?.hasGithub ?? false,
    },
  ];

  const percentage = data?.completionPercentage ?? 0;

  return (
    <section className="bg-bg-surface rounded-lg p-4 md:p-8 border border-border">
      <div>
        <h2 className="text-lg font-semibold mb-2">Profile Strength</h2>
        <p className="text-text-secondary text-sm mb-4">
          Complete your profile to increase your chances of getting noticed by
          employers.
        </p>

        <CircularProgress percentage={percentage} />

        <TaskList tasks={profileTasks} />

        <Button className="w-full group">
          <span>Complete Profile</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-xs text-blue-700">
            <span className="font-bold">Pro Tip:</span> Profiles with LinkedIn
            connections get 3x more views
          </p>
        </div>
      </div>
    </section>
  );
}
