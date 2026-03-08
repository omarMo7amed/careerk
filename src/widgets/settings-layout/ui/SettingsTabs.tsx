"use client";

import { Tabs } from "@/shared";
import { settingsTabs } from "../config/TabsConfig";

interface SettingsTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const tabIds = settingsTabs.map((t) => t.id) as string[];
const tabLabels = Object.fromEntries(settingsTabs.map((t) => [t.id, t.label]));

export function SettingsTabs({ activeTab, onTabChange }: SettingsTabsProps) {
  return (
    <Tabs
      tabs={tabIds}
      activeTab={activeTab}
      onChange={onTabChange}
      labels={tabLabels}
    />
  );
}
