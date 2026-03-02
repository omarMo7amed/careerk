import Link from "next/link";
import { Row } from "./Row";
import { Mail, MapPin, Phone } from "lucide-react";
import { useContactInfoContext } from "../model/ContactInfoContext";

export function DisplayMode() {
  const { contactInfo } = useContactInfoContext();

  return (
    <ul className="flex flex-col gap-3">
      <Row icon={<Phone className="w-4 h-4" />} label="Phone">
        <Link
          href={`tel:${contactInfo.phone}`}
          className="text-foreground hover:text-primary transition-colors truncate"
        >
          {contactInfo.phone}
        </Link>
      </Row>
      <Row icon={<Mail className="w-4 h-4" />} label="Email">
        <Link
          href={`mailto:${contactInfo.cvEmail}`}
          className="text-foreground hover:text-primary transition-colors truncate"
        >
          {contactInfo.cvEmail}
        </Link>
      </Row>
      <Row
        icon={<MapPin className="w-4 h-4" />}
        label="Location"
        value={contactInfo.location}
      />
    </ul>
  );
}
