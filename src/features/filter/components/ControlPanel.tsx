import { cn } from "@/shared";
import { ControlPanelProps } from "../types/ControlPanelProps";
import ClearButton from "./ClearButton";
import ModalButton from "./ModalButton";
import SelectAllButton from "./SelectAllButton";

export function ControlPanel({
  title,
  clearAll,
  selectAll,
  isOpen,
  setIsOpen,
  asDropdown = true,
}: ControlPanelProps) {
  return (
    <div className="flex items-center justify-between gap-4 mb-4">
      <h5 className="text-xs md:text-sm lg:text-lg font-bold text-foreground">
        {title}
      </h5>

      <div className="flex items-center gap-2">
        <div className={cn("md:inline", asDropdown && "hidden")}>
          <ClearButton onClear={clearAll} />
        </div>
        <div className={cn("md:inline", asDropdown && "hidden")}>
          <SelectAllButton onSelectAll={selectAll} />
        </div>
        <div className={cn("inline", !asDropdown && "md:hidden")}>
          {asDropdown && <ModalButton isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}
