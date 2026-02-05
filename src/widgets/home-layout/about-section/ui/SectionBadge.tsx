interface SectionBadgeProps {
  label: string;
}

export function SectionBadge({ label }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-sm text-primary font-medium border border-primary/20">
      {label}
    </div>
  );
}
