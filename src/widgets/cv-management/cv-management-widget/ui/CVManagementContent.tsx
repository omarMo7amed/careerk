import { mockCVInfo } from "@/entities/cv";
import { ExtractedCVInfo } from "../../extracted-info";
import { CTA } from "../../CTA/ui/CTA";
import { RecommendationInsights } from "../../recommendation-insights";

export function CVManagementContent() {
  return (
    <section className="space-y-10 p-6">
      <CTA confirmed={false} />
      <ExtractedCVInfo cvInfo={mockCVInfo} />
      <RecommendationInsights />
    </section>
  );
}
