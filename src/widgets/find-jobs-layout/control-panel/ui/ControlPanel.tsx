import { TableOfOperation } from "@/features/filter";
import { SearchBar } from "@/features/search";

export function ControlPanel() {
  return (
    <div className="m-5 p-4">
      <SearchBar searchPlaceholder="Search for jobs, companies, or keywords..." />

      {/* <div className="flex gap-2 mt-5">
        <TableOfOperation
          title="Job Type"
          options={["Full-time", "Part-time", "Contract"]}
        />
        <TableOfOperation
          title="Experience Level"
          options={["Entry Level", "Mid Level", "Senior Level"]}
        />
        <TableOfOperation
          title="Location"
          options={["Remote", "On-site", "Hybrid"]}
        />
      </div> */}
    </div>
  );
}
