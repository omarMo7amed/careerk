import type { LucideIcon } from "lucide-react";

const semanticColorMap: Record<
  string,
  { bg: string; border: string; iconBg: string; text: string }
> = {
  blue: {
    bg: "bg-primary/5",
    border: "border-primary/20",
    iconBg: "bg-primary/10",
    text: "text-primary",
  },
  green: {
    bg: "bg-success/5",
    border: "border-success/20",
    iconBg: "bg-success/10",
    text: "text-success",
  },
  red: {
    bg: "bg-error/5",
    border: "border-error/20",
    iconBg: "bg-error/10",
    text: "text-error",
  },
  purple: {
    bg: "bg-primary/5",
    border: "border-primary/20",
    iconBg: "bg-primary/10",
    text: "text-primary",
  },
  yellow: {
    bg: "bg-warning/5",
    border: "border-warning/20",
    iconBg: "bg-warning/10",
    text: "text-warning",
  },
  orange: {
    bg: "bg-warning/5",
    border: "border-warning/20",
    iconBg: "bg-warning/10",
    text: "text-warning",
  },
};

interface StatsCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  color: "blue" | "green" | "red" | "purple" | "yellow" | "orange";
}

function StatCard({ label, value, icon: Icon, color }: StatsCardProps) {
  const styles = semanticColorMap[color];
  return (
    <div className={`${styles.bg} border ${styles.border} rounded-xl p-4`}>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 ${styles.iconBg} rounded-lg flex items-center justify-center`}
        >
          <Icon className={`w-5 h-5 ${styles.text}`} />
        </div>
        <div>
          <p className="text-sm font-medium text-text-secondary">{label}</p>
          <p className={`text-2xl font-bold ${styles.text}`}>{value}</p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
