import Link from "next/link";
import type { ContactButtonProps } from "../types/contactButton";

export function ContactButton({ email, subject, body }: ContactButtonProps) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);

  const href = `mailto:${email}${params.toString() ? "?" + params.toString() : ""}`;

  return (
    <div className="flex-1 px-3 py-1.5 rounded-md bg-transparent border border-border text-white hover:opacity-90">
      <Link
        href={href}
        className={` text-primary text-sm inline-block text-center w-full `}
        aria-label={`Contact ${email}`}
      >
        Contact
      </Link>
    </div>
  );
}
