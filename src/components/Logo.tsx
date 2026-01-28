interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizes = {
    sm: {
      container: "gap-2",
      text: "text-3xl",
    },
    md: {
      container: "gap-3",
      text: "text-4xl md:text-5xl",
    },
    lg: {
      container: "gap-4",
      text: "text-5xl md:text-6xl",
    },
  };

  const s = sizes[size];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`flex items-center ${s.container}`}>
        <h1 
          className={`font-display font-bold tracking-wider uppercase ${s.text}`}
          style={{
            textShadow: "0 0 40px rgba(212, 175, 55, 0.5), 0 0 80px rgba(212, 175, 55, 0.3)"
          }}
        >
          <span className="text-cream/95 drop-shadow-lg">Chai</span>
          <span className="text-cream/95 ml-3 drop-shadow-lg">Culture</span>
        </h1>
      </div>
    </div>
  );
};

export default Logo;
