import { Badge, spaceGrotesk, cn } from "@/shared";
import { FileText } from "lucide-react";

function HeroVisual() {
  return (
    <div
      className={cn(
        "md:block flex-1 space-y-6 md:space-y-10 float-organic w-full",
        "hidden",
      )}
    >
      <div className="rounded-2xl bg-bg-surface backdrop-blur-lg shadow-2xl p-6 md:p-10 border border-border hover-tilt">
        <div className="flex items-center gap-3 md:gap-5 mb-6 md:mb-8">
          <div className="w-14 h-14 md:w-20 md:h-20 bg-linear-to-br from-primary to-primary-hover rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl transform hover:rotate-12 transition-transform">
            <FileText className="text-white w-7 h-7 md:w-10 md:h-10" />
          </div>
          <div className={cn(spaceGrotesk.className)}>
            <h4 className="font-black text-lg md:text-xl">CV Analysis</h4>
            <p className="text-xs md:text-sm text-text-muted font-medium">
              AI matching in progress...
            </p>
          </div>
        </div>
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center justify-between p-4 md:p-5 bg-success/10 rounded-2xl border-2 border-success/20 hover:border-success/40 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-success rounded-full"></div>
              <span className="text-xs md:text-sm font-bold">
                Junior Developer
              </span>
            </div>
            <span className="text-success font-black text-lg md:text-xl">
              95%
            </span>
          </div>
          <div className="flex items-center justify-between p-4 md:p-5 bg-primary/10 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-primary rounded-full"></div>
              <span className="text-xs md:text-sm font-bold">
                Frontend Engineer
              </span>
            </div>
            <span className="text-primary font-black text-lg md:text-xl">
              88%
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-bg-surface backdrop-blur-lg shadow-2xl p-6 md:p-10 border border-border hover-tilt">
        <div className="flex justify-between items-center">
          <h4
            className={cn(spaceGrotesk.className, "text-base md:text-xl mb-6")}
          >
            Connected Platforms
          </h4>
          <Badge className="bg-primary text-white mb-6 shadow-lg" size="md">
            5 Platforms
          </Badge>
        </div>
        <div className="w-full md:w-[80%] flex flex-wrap gap-x-4">
          <Badge
            className="bg-linear-to-r from-blue-100 to-blue-200 text-blue-800 mb-6"
            size="md"
            animate={true}
          >
            LinkedIn
          </Badge>
          <Badge
            className="bg-linear-to-r from-purple-100 to-purple-200 text-purple-800 mb-6"
            size="md"
            animate={true}
          >
            Indeed
          </Badge>
          <Badge
            className="bg-linear-to-r from-green-100 to-green-200 text-green-800 mb-6"
            size="md"
            animate={true}
          >
            GlassDoor
          </Badge>
          <Badge
            className="bg-linear-to-r from-orange-100 to-orange-200 text-orange-800 mb-6"
            size="md"
            animate={true}
          >
            Bayt
          </Badge>
          <Badge
            className="bg-linear-to-r from-blue-300 to-blue-500 text-blue-800 mb-6"
            size="md"
            animate={true}
          >
            Wuzzuf
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;
