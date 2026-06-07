import { FloatingShapes } from "@/shared/ui/FloatingShapes";
import { MockupCards } from "./MockupCards";

export function SignupHero() {
  return (
    <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-screen overflow-hidden">
      {/* Abstract gradient background using theme primary color */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[color:var(--primary)] via-[#1957bc] to-[#4895ef]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, var(--primary), #1957bc, #4895ef)",
        }}
      />

      <FloatingShapes />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-12">
        {/* Top Section: Headline */}
        <div className="text-white">
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            All Job Sites,
            <br />
            One Smart Search
          </h2>
          <p className="text-lg text-white/80 max-w-md">
            Upload your CV and discover perfectly matched opportunities from
            every major job platform.
          </p>
        </div>

        {/* Center: Mockup Cards */}
        <MockupCards />
      </div>
    </div>
  );
}
