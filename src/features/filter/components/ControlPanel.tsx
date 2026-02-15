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
}: ControlPanelProps) {
  return (
    <div className="flex items-center justify-between gap-4 mb-4">
      <h5 className="text-xs md:text-sm lg:text-lg font-bold text-foreground">
        {title}
      </h5>

      <div className="flex items-center gap-2">
        <div className="hidden md:inline">
          <ClearButton onClear={clearAll} />
        </div>
        <div className="hidden md:inline">
          <SelectAllButton onSelectAll={selectAll} />
        </div>
        <div className="md:hidden inline">
          <ModalButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
}
