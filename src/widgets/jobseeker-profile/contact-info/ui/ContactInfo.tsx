"use client";

import {
  ContactInfoComponents,
  ContactInfoProvider,
} from "../model/ContactInfoContext";
import type { ContactInfoRootProps } from "../types/contactInfoProps";

export function ContactInfo({
  contactInfo,
  isOwner = false,
}: ContactInfoRootProps) {
  return (
    <ContactInfoProvider contactInfo={contactInfo} isOwner={isOwner}>
      <ContactInfoComponents.Header />
      <ContactInfoComponents.Display />
      <ContactInfoComponents.EditingMode />
    </ContactInfoProvider>
  );
}
