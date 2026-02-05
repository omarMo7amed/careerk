import HeroContent from "../../../hero-section/ui/HeroContent";
import HeroVisual from "../../../hero-section/ui/HeroVisual";

export function HeroSection() {
  return (
    <section className="bg-linear-to-br from-blue-50 via-white to-blue-50/30 min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-90px)] text-foreground relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen -my-4 sm:-my-8 lg:-my-12">
      <div className="absolute top-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-center">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
