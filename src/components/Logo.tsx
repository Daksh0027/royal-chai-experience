import logoImage from "@/assets/logs.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizes = {
    sm: {
      container: "gap-2",
      text: "text-3xl",
      logo: "w-24",
    },
    md: {
      container: "gap-3",
      text: "text-4xl md:text-5xl",
      logo: "w-32",
    },
    lg: {
      container: "gap-4",
      text: "text-5xl md:text-6xl",
      logo: "w-40",
    },
  };

  const s = sizes[size];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Logo Image */}
      <div className="mb-5">
        <img
          src={logoImage}
          alt="Chai Culture Logo"
          className={`${s.logo} h-auto drop-shadow-lg`}
          style={{
            filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.4))"
          }}
        />
      </div>
      
      {/* Main Title */}
      <div className={`flex items-center ${s.container} mt-5`}>
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
