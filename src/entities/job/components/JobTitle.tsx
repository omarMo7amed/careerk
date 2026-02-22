interface JobTitleProps {
  title: string;
}

export function JobTitle({ title }: JobTitleProps) {
  return (
    <h4 className="font-semibold text-base line-clamp-2 text-foreground">
      {title}
    </h4>
  );
}
