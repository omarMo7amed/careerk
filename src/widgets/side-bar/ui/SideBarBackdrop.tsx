type Props = {
  open: boolean;
  onClose: () => void;
};

export function SideBarBackdrop({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
    />
  );
}
