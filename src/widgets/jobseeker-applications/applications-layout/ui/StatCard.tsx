import { colorMap } from "@/shared";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  color: "blue" | "green" | "red" | "purple" | "yellow" | "orange";
}

function StatCard({ label, value, icon: Icon, color }: StatsCardProps) {
  const styles = colorMap[color];
  return (
    <div className={`${styles.bg} border ${styles.border} rounded-xl p-4`}>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 ${styles.iconBg} rounded-lg flex items-center justify-center`}
        >
          <Icon className={`w-5 h-5 ${styles.text}`} />
        </div>
        <div>
          <p className=" text-sm font-medium text-text-secondary ">{label}</p>
          <p className={`text-2xl font-bold ${styles.text}`}>{value}</p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
