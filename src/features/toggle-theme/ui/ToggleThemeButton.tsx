"use client";

import { Button } from "@/shared";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 rounded-lg p-1">
      <Button
        variant={theme === "light" ? "primary" : "outline"}
        onClick={() => setTheme("light")}
      >
        <Sun className="w-5 h-5 mr-2" />
        <span className="text-sm font-medium">Light</span>
      </Button>
      <Button
        variant={theme === "dark" ? "primary" : "outline"}
        onClick={() => setTheme("dark")}
      >
        <Moon className="w-5 h-5 mr-2" />
        <span className="text-sm font-medium">Dark</span>
      </Button>
    </div>
  );
}
