import Link from "next/link";

export function DownloadButton({ href }: { href: string }) {
  return (
    <div className="flex-1 px-3 text-nowrap py-1.5 rounded-md bg-transparent border border-border text-white hover:opacity-90">
      <Link
        href={href || "#"}
        className={` text-primary text-sm inline-block text-center w-full `}
        aria-label={`Download CV`}
      >
        Download CV
      </Link>
    </div>
  );
}
