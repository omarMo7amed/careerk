import { Badge } from "@/shared";
import { Card } from "@/shared";
import { Plus, Search, Sparkles, Briefcase, Pencil } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    label: "Post New Job",
    description: "Create and publish a new job listing",
    href: "./",
    icon: Plus,
  },
  {
    label: "Manage Jobs",
    description: "Edit, update, or manage posted jobs",
    href: "./",
    icon: Briefcase,
  },
  {
    label: "Search Candidates",
    description: "Find qualified candidates for roles",
    href: "./",
    icon: Search,
  },
  {
    label: "Edit Company Profile",
    description: "Update company information and details",
    href: "./",
    icon: Pencil,
  },
];
function QuickActions() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-4 h-4 text-primary" />
        <h3 className="text-lg font-bold">Quick Actions</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Card key={action.label}>
              <Link href={action.href}>
                <div className="mb-6">
                  <Badge
                    variant="info"
                    className="min-w-8 min-h-8 rounded-lg justify-center border-none"
                  >
                    <Icon className="w-4 h-4" />
                  </Badge>
                </div>
                <div className="mb-6">
                  <h6 className="font-semibold mb-2">{action.label}</h6>
                  <p className="text-sm text-text-secondary">
                    {action.description}
                  </p>
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;
