"use client";

import {
  ContactInfoComponents,
  ContactInfoProvider,
} from "../model/ContactInfoContext";
import type { ContactInfoRootProps } from "../types/contactInfoProps";

export function ContactInfo({ isOwner = false }: ContactInfoRootProps) {
  return (
    <ContactInfoProvider isOwner={isOwner}>
      <ContactInfoComponents.Header />
      <ContactInfoComponents.Display />
      <ContactInfoComponents.EditingMode />
    </ContactInfoProvider>
  );
}
