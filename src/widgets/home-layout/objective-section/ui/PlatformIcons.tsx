"use client";

import Image from "next/image";
import { icons } from "../lib/platformIcons";

export function PlatformIcons() {
  return (
    <div className="hidden md:block absolute inset-0 h-[600px] overflow-hidden top-1/2">
      {icons.map(({ id, type, left, top, z, svg, text }) => (
        <div
          key={`${id}-${left}-${top}`}
          className="absolute"
          style={{
            left,
            top,
            zIndex: 10,
            opacity: 0.6,
            scale: String(z),
          }}
        >
          {type === "svg" ? (
            <Image
              src={svg!}
              alt={id}
              width={96}
              height={96}
              className="w-36 h-36 object-contain"
            />
          ) : (
            <div className="w-24 h-24 bg-primary text-white rounded-2xl flex items-center justify-center text-4xl font-black">
              {text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
