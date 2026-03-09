import { NewJobButton } from "@/features/post-job-form";
import { UploadCvButton } from "@/features/upload-cv";
import { Badge, spaceGrotesk, cn } from "@/shared";

function HeroContent() {
  return (
    <div className="flex flex-col justify-between flex-1">
      <Badge className="bg-bg-surface text-primary mb-6 md:mb-10" size="lg">
        <span className="w-2.5 h-2.5 bg-success rounded-full"></span>
        <span className="text-primary text-xs md:text-sm">
          4+ Platforms · AI Powered
        </span>
      </Badge>

      <h1
        className={cn(
          spaceGrotesk.className,
          "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 md:mb-8 leading-[1.1]",
        )}
      >
        Your Dream Job
        <span className="block text-primary mt-2">Awaits Here</span>
      </h1>

      <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12">
        Stop jumping between job sites. Upload your CV once and let AI discover
        perfect matches across LinkedIn, Indeed, Glassdoor, and 2 more platforms
        instantly.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
        <UploadCvButton />
        <NewJobButton variant="outline" />
      </div>
    </div>
  );
}

export default HeroContent;
