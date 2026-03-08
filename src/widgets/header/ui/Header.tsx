"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavigationItems } from "./NavigationItems";
import NavButtons from "./NavButtons";
import { Menu, X } from "lucide-react";
import { cn } from "@/shared";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <header
      className={cn(
        "bg-bg-surface shadow-sm min-h-[70px] md:h-[90px] relative",
      )}
    >
      <div className="container mx-auto px-4 py-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center">
            <Image
              src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
              alt="Careerk Logo"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavigationItems />
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:block">
            <NavButtons />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2  hover:text-primary z-50 relative"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4 mb-4">
                <NavigationItems />
              </nav>
              <NavButtons />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
