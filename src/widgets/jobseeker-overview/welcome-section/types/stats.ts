export interface StatsCard {
  id: string;
  title: string;
  value: number;
  change?: number;
  changeLabel?: string;
  icon: "send" | "star" | "bookmark" | "calendar";
  color: "blue" | "purple" | "orange" | "green";
}
