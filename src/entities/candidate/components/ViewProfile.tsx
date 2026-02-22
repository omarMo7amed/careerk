import Link from "next/link";
import type { ViewProfileProps } from "../types/viewProfile";

export function ViewProfile({ id }: ViewProfileProps) {
  const profileHref = `/candidates/${id}`;
  return (
    <Link
      href={profileHref || "#"}
      className="text-white text-nowrap text-sm text-center inline-block w-full"
      aria-label={`View profile of candidate ${id}`}
    >
      View Profile
    </Link>
  );
}
