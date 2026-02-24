// widgets/jobseeker-overview/quick-actions/ui/QuickActions.tsx

import { List } from "@/widgets/List";
import { quickActions } from "../config/actionsConfig";
import { ActionCard } from "./ActionCard";

export function QuickActions() {
  return (
    <List
      items={quickActions}
      renderItem={(action) => <ActionCard key={action.id} action={action} />}
      columnsInLarge={4}
      columnsInMedium={3}
      columnsInSmall={2}
    />
  );
}
