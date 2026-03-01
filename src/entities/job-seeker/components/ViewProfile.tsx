import Link from "next/link";
import type { ViewProfileProps } from "../types/viewProfile";

export function ViewProfile({ id }: ViewProfileProps) {
  const profileHref = `/candidates/${id}`;
  return (
    <div className="px-3 py-1.5 my-4 rounded-md bg-primary text-white hover:opacity-90 ">
      <Link
        href={profileHref || "#"}
        className="text-white text-sm text-center inline-block w-full"
        aria-label={`View profile of candidate ${id}`}
      >
        View Profile
      </Link>
    </div>
  );
}
