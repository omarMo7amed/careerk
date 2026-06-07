import { FloatingShapes } from "@/shared";
import { MockupCards } from "./MockupCards";

export function LoginHero() {
  return (
    <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[color:var(--primary)] via-[#1957bc] to-[#4895ef]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, var(--primary), #1957bc, #4895ef)",
        }}
      />

      <FloatingShapes />

      <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-12">
        <div className="text-white">
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Find Your Perfect
            <br />
            Career Match
          </h2>
          <p className="text-lg text-white/80 max-w-md">
            Connect with top companies and discover opportunities that align
            with your skills and aspirations.
          </p>
        </div>
        <MockupCards />
      </div>
    </div>
  );
}
