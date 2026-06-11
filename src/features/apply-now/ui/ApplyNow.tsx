import { Button } from "@/shared";
import Link from "next/link";

export function ApplyNow({
  link,
  onClick,
  isLoading,
  isSuccess,
}: {
  link?: string;
  onClick?: () => void;
  isLoading?: boolean;
  isSuccess?: boolean;
}) {
  return (
    <>
      {link ? (
        <Link
          href={link}
          target="_blank"
          className="text-white bg-primary px-4 py-2 rounded-md"
        >
          Apply Now
        </Link>
      ) : (
        <Button
          onClick={onClick}
          variant="primary"
          disabled={isLoading || isSuccess}
          className="text-white"
          size="md"
        >
          {isLoading
            ? "Applying..."
            : isSuccess
              ? "Application Submitted"
              : "Apply Now"}
        </Button>
      )}
    </>
  );
}
