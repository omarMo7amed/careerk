interface JobTitleProps {
  title: string;
}

export function JobTitle({ title }: JobTitleProps) {
  return (
    <h4 className="font-semibold text-base mb-4 line-clamp-2 min-h-12 text-foreground">
      {title}
    </h4>
  );
}
