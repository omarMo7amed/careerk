"use client";
import { MoveLeft } from "lucide-react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      variant="ghost"
      className="cursor-pointer group flex items-center gap-2 text-foreground text-sm font-semibold"
    >
      <MoveLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
      Back to Jobs
    </Button>
  );
}

export default BackButton;
