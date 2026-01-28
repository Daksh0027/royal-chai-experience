import { Sparkles } from "lucide-react";

const LaunchBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                    bg-primary/10 border border-primary/30 
                    animate-pulse-glow">
      <Sparkles className="w-4 h-4 text-primary" />
      <span className="text-sm font-elegant text-cream tracking-wider uppercase">
        Launching Soon
      </span>
      <Sparkles className="w-4 h-4 text-primary" />
    </div>
  );
};

export default LaunchBadge;
