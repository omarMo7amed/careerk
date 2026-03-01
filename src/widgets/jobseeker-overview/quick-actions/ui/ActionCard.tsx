import Link from "next/link";
import { QuickAction } from "../config/actionsConfig";

interface ActionCardProps {
  action: QuickAction;
}

export function ActionCard({ action }: ActionCardProps) {
  const Icon = action.icon;

  return (
    <Link
      href={action.href}
      className="group rounded-xl border-2 border-dashed border-primary/30 p-6 hover:border-primary hover:bg-primary/5 transition-all text-center"
    >
      <Icon
        className={`w-8 h-8 mx-auto mb-3 ${action.color} group-hover:scale-110 transition-transform`}
      />
      <p className="text-sm font-semibold text-text-secondary group-hover:text-primary transition-colors">
        {action.label}
      </p>
    </Link>
  );
}
