import { Badge, Button, spaceGrotesk } from "@/shared";
import { ArrowRight } from "lucide-react";

function HeroContent() {
  return (
    <div className="flex flex-col justify-between flex-1">
      <Badge className="bg-white text-primary mb-6 md:mb-10" size="lg">
        <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        <span className="text-primary text-xs md:text-sm">
          50+ Platforms · AI Powered
        </span>
      </Badge>

      <h1
        className={` ${spaceGrotesk.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 md:mb-8 leading-[1.1]`}
      >
        Your Dream Job
        <span className="block text-primary mt-2">Awaits Here</span>
      </h1>

      <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12">
        Stop jumping between job sites. Upload your CV once and let AI discover
        perfect matches across LinkedIn, Indeed, Glassdoor, and 47 more
        platforms instantly.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
        <Button variant="primary">
          <span>Upload Your CV</span>
          <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
        </Button>
        <Button variant="outline">Post a Job</Button>
      </div>
    </div>
  );
}

export default HeroContent;
