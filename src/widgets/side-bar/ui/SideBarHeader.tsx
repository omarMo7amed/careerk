import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/shared";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  toggle: () => void;
};

export function SideBarHeader({ open, toggle }: Props) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    function applyTheme(theme: string) {
      if (theme === "dark") {
        setTheme(storedTheme);
      }
    }

    applyTheme(storedTheme);
  }, []);

  return (
    <div
      className={`flex items-center ${
        open ? "justify-between" : "justify-center"
      } lg:justify-start mb-6 px-2 py-5 border-b border-border`}
    >
      <Link href="/" className={`flex items-center ${open && "w-auto"}`}>
        <Image
          src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
          alt="Careerk Logo"
          width={160}
          height={40}
          priority
        />
      </Link>

      <div className="cursor-pointer lg:hidden">
        <Button onClick={toggle} variant="ghost">
          <ChevronLeft
            className="w-4 h-4 text-text-secondary transition-transform duration-300"
            style={{
              transform: open ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
        </Button>
      </div>
    </div>
  );
}
