import { SearchBar } from "@/features/search";

export function ControlPanel() {
  return (
    <div className="m-5 p-4">
      <SearchBar searchPlaceholder="Search for jobs by name or keyword" />
    </div>
  );
}
