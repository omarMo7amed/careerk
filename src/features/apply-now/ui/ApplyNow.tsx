import { Button } from "@/shared";

export function ApplyNow({ onClick }: { onClick: () => void }) {
  //   if (!auth) return null;
  return (
    <Button
      onClick={onClick}
      variant="primary"
      className="text-white"
      size="md"
    >
      Apply Now
    </Button>
  );
}
