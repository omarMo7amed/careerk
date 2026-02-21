import { colorMap, iconMap } from "../config/CardConfig";
import { StatsCard } from "../types/stats";

interface StatCardProps {
  card: StatsCard;
}

export function StatCard({ card }: StatCardProps) {
  const Icon = iconMap[card.icon];
  const colors = colorMap[card.color];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="text-3xl font-bold text-primary mb-1">{card.value}</h3>

          <p className="text-sm text-gray-600 mb-2 font-medium">{card.title}</p>

          {card.changeLabel && (
            <p className="text-xs text-primary font-semibold flex items-center gap-1">
              {card.change && (
                <span className="text-green-600">+{card.change}</span>
              )}
              <span>{card.changeLabel}</span>
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center border ${colors.border} group-hover:scale-110 transition-transform`}
          >
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
