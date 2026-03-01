"use client";
import { createContext, useContext } from "react";
import type { ContactInfoData } from "../types/contactInfoProps";
import { useContactInfoModel } from "./useContactInfoModel";
import { ContactInfoHeader } from "../component/ContactInfoHeader";
import { DisplayMode } from "../component/DisplayMode";
import { EditingMode as EditMode } from "../component/EditingMode";
import { ContactInfoContextValue } from "../types/contactInfoContextValue";

export const ContactInfoContext = createContext<ContactInfoContextValue | null>(
  null,
);

export function ContactInfoProvider({
  contactInfo,
  isOwner,
  children,
}: {
  contactInfo: ContactInfoData;
  isOwner: boolean;
  children: React.ReactNode;
}) {
  const model = useContactInfoModel({ contactInfo, isOwner });

  return (
    <ContactInfoContext.Provider value={model}>
      <section className="bg-bg-surface rounded-xl border border-border p-6 shadow-sm">
        {children}
      </section>
    </ContactInfoContext.Provider>
  );
}

export function useContactInfoContext(): ContactInfoContextValue {
  const ctx = useContext(ContactInfoContext);
  if (!ctx)
    throw new Error(
      "useContactInfoContext must be used inside <ContactInfo.Root>",
    );
  return ctx;
}

function Header() {
  return <ContactInfoHeader />;
}

function Display() {
  const { editing } = useContactInfoContext();
  if (editing) return null;
  return <DisplayMode />;
}

function EditingMode() {
  const { editing } = useContactInfoContext();
  if (!editing) return null;
  return <EditMode />;
}

export const ContactInfoComponents = {
  Header,
  Display,
  EditingMode,
};
