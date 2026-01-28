import { Instagram, Facebook, Twitter } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <div className="flex items-center gap-4">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="group w-12 h-12 rounded-full border border-primary/30 
                     flex items-center justify-center
                     hover:border-primary hover:bg-primary/10
                     transition-all duration-300"
        >
          <Icon 
            className="w-5 h-5 text-cream/70 group-hover:text-primary transition-colors" 
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
