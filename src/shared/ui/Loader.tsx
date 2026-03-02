import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="w-6 h-6 animate-spin text-primary" />
    </div>
  );
}

export { Loader };
