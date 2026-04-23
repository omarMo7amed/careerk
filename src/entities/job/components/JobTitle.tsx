interface JobTitleProps {
  title: string;
  experienceLevel?: string;
}

export function JobTitle({ title, experienceLevel }: JobTitleProps) {
  return (
    <h4 className="font-semibold text-base line-clamp-2 text-foreground">
      {title +
        (experienceLevel
          ? ` (${experienceLevel.charAt(0).toUpperCase() + experienceLevel.slice(1)} Level)`
          : "")}
    </h4>
  );
}
