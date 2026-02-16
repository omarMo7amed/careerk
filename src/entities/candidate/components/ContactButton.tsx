import Link from "next/link";
import type { ContactButtonProps } from "../types/contactButton";

export function ContactButton({
  email = "dsf",
  subject,
  body,
}: ContactButtonProps) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);

  const href = `mailto:${email}${params.toString() ? "?" + params.toString() : ""}`;

  return (
    <Link
      href={href}
      className={` text-primary text-sm inline-block text-center w-full `}
      aria-label={`Contact ${email}`}
    >
      Contact
    </Link>
  );
}
