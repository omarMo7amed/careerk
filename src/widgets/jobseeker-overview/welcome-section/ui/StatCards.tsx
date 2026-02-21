import { mockStatsCards } from "../mock-data/statsData";
import { StatCard } from "./StatCard";

export function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {mockStatsCards.map((card) => (
        <StatCard key={card.id} card={card} />
      ))}
    </div>
  );
}
