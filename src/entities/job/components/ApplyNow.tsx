import Link from "next/link";

type ApplyNowProps = {
  link?: string;
  onClick?: () => void;
};

export function ApplyNow({ link, onClick }: ApplyNowProps) {
  return (
    <>
      {link ? (
        <Link
          href={link}
          target="_blank"
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/70 transition"
        >
          Apply Now
        </Link>
      ) : (
        <button
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/70 transition"
          onClick={onClick}
        >
          Apply Now
        </button>
      )}
    </>
  );
}
