export interface RowProps {
  icon: React.ReactNode;
  label: string;
  children?: React.ReactNode;
  value?: string | null;
}

export function Row({ icon, label, children, value }: RowProps) {
  return (
    <li className="flex items-center gap-3 text-sm">
      <span className="text-primary shrink-0">{icon}</span>
      <span className="text-text-muted w-28 shrink-0">{label}</span>
      {children ? (
        children
      ) : (
        <span className="text-foreground truncate">{value}</span>
      )}
    </li>
  );
}
