import Image from "next/image";
import { cn } from "@/shared";
import { SectionImageProps } from "../types/types";

export function SectionImage({ src, alt, className = "" }: SectionImageProps) {
  return (
    <div className={cn(className)}>
      <div className="relative">
        <div className="absolute -inset-4 bg-primary/10 opacity-20 blur-3xl rounded-full"></div>
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={800}
            quality={75}
            priority={false}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
