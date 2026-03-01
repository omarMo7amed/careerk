interface JobSectionProps {
  title: string;
  children: React.ReactNode;
}

export function JobSection({ title, children }: JobSectionProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary rounded-full" />
        {title}
      </h2>
      {children}
    </div>
  );
}
