import { ChevronDown } from "lucide-react";

export default function ModalButton({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center p-2 rounded-md cursor-pointer hover:bg-muted "
      onClick={() => setIsOpen(true)}
      aria-expanded={isOpen}
      aria-label="Open filters"
    >
      <ChevronDown
        className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
      />
    </button>
  );
}
