"use client";

import { RoleSlug, LevelSlug, PrepStats } from "@/entities/interview";
import { Select, Card } from "@/shared";
import { ROLE_OPTIONS, LEVEL_OPTIONS } from "../lib/constants";

interface RoleSelectorProps {
  selectedRole: RoleSlug | null;
  onRoleChange: (role: RoleSlug | null) => void;
  selectedLevel: LevelSlug | null;
  onLevelChange: (level: LevelSlug | null) => void;
  stats: PrepStats | null;
  selectionMade: boolean;
  isLoading?: boolean;
}

export function RoleSelector({
  selectedRole,
  onRoleChange,
  selectedLevel,
  onLevelChange,
  stats,
  selectionMade,
  isLoading = false,
}: RoleSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Job Role"
          value={selectedRole ?? ""}
          onChange={(e) => {
            const val = e.target.value;
            onRoleChange(val ? (val as RoleSlug) : null);
          }}
          options={[
            { label: "Select a role", value: "" },
            ...ROLE_OPTIONS.map((opt) => ({ label: opt.label, value: opt.value })),
          ]}
        />
        <Select
          label="Level"
          value={selectedLevel ?? ""}
          onChange={(e) => {
            const val = e.target.value;
            onLevelChange(val ? (val as LevelSlug) : null);
          }}
          options={[
            { label: "Select a level", value: "" },
            ...LEVEL_OPTIONS.map((opt) => ({ label: opt.label, value: opt.value })),
          ]}
        />
      </div>

      {selectionMade && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : stats ? (
            <>
              <StatCard label="Total Questions" value={stats.total} />
              <StatCard label="Technical" value={stats.technical} />
              <StatCard label="Problem Solving" value={stats.problemSolving} />
              <StatCard label="Behavioral" value={stats.behavioral} />
            </>
          ) : null}
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <Card className="text-center p-4">
      <p className="text-2xl font-bold text-primary">{value}</p>
      <p className="text-xs text-text-secondary mt-1">{label}</p>
    </Card>
  );
}

function SkeletonCard() {
  return (
    <Card className="text-center p-4">
      <div className="h-7 w-12 mx-auto rounded bg-bg-muted animate-pulse" />
      <div className="h-3 w-20 mx-auto mt-2 rounded bg-bg-muted animate-pulse" />
    </Card>
  );
}
