import Link from "next/link";

export function DownloadButton({ href }: { href: string }) {
  return (
    <Link
      href={href || "#"}
      className={` text-primary text-sm inline-block text-center w-full `}
      aria-label={`Download CV`}
    >
      Download CV
    </Link>
  );
}
