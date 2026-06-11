export function NotFound({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <h2 className="text-2xl text-foreground font-semibold">
        No results found
      </h2>
      <p className="text-text-secondary">
        {message || "Try adjusting your search criteria."}
      </p>
    </div>
  );
}
