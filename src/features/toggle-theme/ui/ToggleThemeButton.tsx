"use client";

import { Button } from "@/shared";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function ToggleThemeButton() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "light";

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div className="flex items-center gap-2 rounded-lg p-1">
      <Button
        variant={theme === "light" ? "primary" : "outline"}
        onClick={() => handleThemeChange("light")}
      >
        <Sun className="w-5 h-5 mr-2" />
        <span className="text-sm font-medium">Light</span>
      </Button>
      <Button
        variant={theme === "dark" ? "primary" : "outline"}
        onClick={() => handleThemeChange("dark")}
      >
        <Moon className="w-5 h-5 mr-2" />
        <span className="text-sm font-medium">Dark</span>
      </Button>
    </div>
  );
}
