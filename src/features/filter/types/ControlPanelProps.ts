export interface ControlPanelProps {
  title: string;
  clearAll: () => void;
  selectAll: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  asDropdown?: boolean;
}
