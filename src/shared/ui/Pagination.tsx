import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";

function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <Button disabled={page == 1} onClick={() => onPageChange(page - 1)}>
        <ChevronLeft />
      </Button>

      <span className="px-4 py-2 rounded-lg border  text-primary border-primary/20 bg-primary/10 text-sm font-medium">
        Page {page} of {totalPages}
      </span>

      <Button
        disabled={page == totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}

export default Pagination;
