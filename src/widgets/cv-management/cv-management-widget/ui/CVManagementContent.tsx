import { CTA } from "../../CTA/ui/CTA";
import { ExtractedCVInfo } from "../../extracted-info";
import { RecommendationInsights } from "../../recommendation-insights";

import { useCVInfo } from "@/entities/cv";
import { CVDropZone } from "@/features/upload-cv";

import { Loader } from "@/shared";

export function CVManagementContent() {
  const { data, isLoading, isConfirmed, isUpdatePending, isFirstUpload } =
    useCVInfo();

  if (isLoading) {
    return <Loader />;
  }
  // console.log("dasioghjfoiushdgivasohgdboiusaioubgdois", error);
  // if (error) {
  //   return <Error />;
  // }

  const hasData = isUpdatePending || isConfirmed || isFirstUpload;

  if (!hasData) {
    return (
      <section className="space-y-10 p-5">
        <CVDropZone />
      </section>
    );
  }

  return (
    <section className="space-y-10 p-5">
      <CTA
        isConfirmed={isConfirmed}
        isUpdatePending={isUpdatePending}
        isFirstUpload={isFirstUpload}
      />

      <ExtractedCVInfo
        cvInfo={data}
        isConfirmed={isConfirmed}
        hasCVInfo={isUpdatePending || isFirstUpload}
      />

      {isConfirmed && <RecommendationInsights />}
      <CVDropZone />
    </section>
  );
}
