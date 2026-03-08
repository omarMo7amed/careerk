export interface SettingsTab {
  id: string;
  label: string;
}

export const settingsTabs: SettingsTab[] = [
  {
    id: "notifications",
    label: "Notifications",
  },
  {
    id: "danger-zone",
    label: "Danger Zone",
  },
  {
    id: "security",
    label: "Security",
  },
];
