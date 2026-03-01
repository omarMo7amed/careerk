import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface EmptyProps {
  message?: string;
  linkText?: string;
  linkHref: string;
}

function Empty({ message, linkText, linkHref }: EmptyProps) {
  return (
    <div className="text-center py-12">
      <p className="text-text-secondary mb-4">
        {message || "Nothing here yet"}
      </p>
      <Link
        href={linkHref}
        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
      >
        <span>{linkText || "Explore Now"}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export { Empty };
