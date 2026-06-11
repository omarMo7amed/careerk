"use client";

import { RoleSlug, LevelSlug } from "@/entities/interview";
import { Select } from "@/shared";
import { ROLE_OPTIONS, LEVEL_OPTIONS } from "../lib/projectMapping";

interface RoleLevelSelectProps {
  selectedRole: RoleSlug | null;
  onRoleChange: (role: RoleSlug | null) => void;
  selectedLevel: LevelSlug | null;
  onLevelChange: (level: LevelSlug | null) => void;
}

export function RoleLevelSelect({
  selectedRole,
  onRoleChange,
  selectedLevel,
  onLevelChange,
}: RoleLevelSelectProps) {
  return (
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
  );
}
