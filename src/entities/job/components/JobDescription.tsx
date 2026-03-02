export function JobDescription({ description }: { description: string }) {
  return (
    <p className="mb-5 text-text-secondary whitespace-pre-line line-clamp-2">
      {description}
    </p>
  );
}
