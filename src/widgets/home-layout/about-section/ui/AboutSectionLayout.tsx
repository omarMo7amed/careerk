import {  cn } from "@/shared";
import { BenefitCard } from "./BenefitCard";
import { SectionBadge } from "./SectionBadge";
import { SectionImage } from "./SectionImage";
import { AboutSectionLayoutProps } from "../types/types";

export function AboutSectionLayout({
  id,
  badgeLabel,
  heading,
  description,
  benefits,

  imageSrc,
  imageAlt,
  imagePosition = "right",
  zIndex = "z-10",
  children,
}: AboutSectionLayoutProps) {
  const imageOrderClass =
    imagePosition === "left" ? "order-1 md:order-1" : "order-1 md:order-2";
  const contentOrderClass =
    imagePosition === "left" ? "order-2 md:order-2" : "order-2 md:order-1";

  return (
    <section id={id} className={cn("md:sticky bg-background md:top-0", zIndex)}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center py-5">
          {/* Image */}
          <SectionImage
            src={imageSrc}
            alt={imageAlt}
            className={imageOrderClass}
          />

          {/* Content */}
          <div className={cn("space-y-6", contentOrderClass)}>
            <SectionBadge label={badgeLabel} />

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {heading}
            </h2>

            <p className="text-lg text-text-secondary">{description}</p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
