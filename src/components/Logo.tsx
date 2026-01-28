import { Crown } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizes = {
    sm: {
      container: "gap-2",
      icon: 24,
      text: "text-xl",
      tagline: "text-xs",
    },
    md: {
      container: "gap-3",
      icon: 32,
      text: "text-2xl md:text-3xl",
      tagline: "text-xs md:text-sm",
    },
    lg: {
      container: "gap-4",
      icon: 40,
      text: "text-3xl md:text-4xl",
      tagline: "text-sm",
    },
  };

  const s = sizes[size];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`flex items-center ${s.container}`}>
        <div className="relative">
          <Crown 
            size={s.icon} 
            className="text-primary animate-float" 
            strokeWidth={1.5}
          />
          <div className="absolute inset-0 blur-md bg-primary/30 -z-10" />
        </div>
        <h1 className={`font-display font-semibold tracking-wide ${s.text}`}>
          <span className="text-gradient-gold">Chai</span>
          <span className="text-cream ml-2">Culture</span>
        </h1>
      </div>
    </div>
  );
};

export default Logo;
