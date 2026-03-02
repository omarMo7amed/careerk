import { StatsCard } from "../types/stats";

export const mockStatsCards: StatsCard[] = [
  {
    id: "1",
    title: "Active Applications",
    value: 5,
    change: 2,
    changeLabel: "this week",
    icon: "send",
    color: "blue",
  },
  {
    id: "2",
    title: "Recommended Jobs",
    value: 8,
    change: 3,
    changeLabel: "new today",
    icon: "star",
    color: "purple",
  },
  {
    id: "3",
    title: "Saved Jobs",
    value: 3,
    changeLabel: "View all",
    icon: "bookmark",
    color: "orange",
  },
  {
    id: "4",
    title: "Upcoming Interviews",
    value: 1,
    changeLabel: "Tomorrow at 2 PM",
    icon: "calendar",
    color: "green",
  },
];
