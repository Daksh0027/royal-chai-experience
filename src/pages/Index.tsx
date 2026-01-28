import Logo from "@/components/Logo";
import EmailSignup from "@/components/EmailSignup";
import SocialLinks from "@/components/SocialLinks";
import LaunchBadge from "@/components/LaunchBadge";
import RoyalDivider from "@/components/RoyalDivider";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Premium chai with aromatic spices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-copper/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Launch Badge */}
          <div className="opacity-0 animate-fade-in-up">
            <LaunchBadge />
          </div>

          {/* Logo None Added Currently */}
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <Logo size="lg" />
          </div>

          {/* Tagline */}
          <div className="opacity-0 animate-fade-in-up animation-delay-400">
            <h2 className="font-display italic text-4xl my-5 text-cream/90">
              "Brew the Royal Tradition"
            </h2>
          </div>

          <RoyalDivider />

          {/* Brand Description */}
          <div className="opacity-0 animate-fade-in-up animation-delay-400 space-y-4">
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed max-w-xl mx-auto font-elegant">
              Where ancient recipes meet modern convenience.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mx-auto font-body">
              Sourced from the finest estates, our premium chai premix captures the 
              <span className="text-cream"> warmth of cardamom</span>, the 
              <span className="text-cream"> depth of cinnamon</span>, and the 
              <span className="text-cream"> soul of authentic masala chai</span> — 
              all in a single, effortless cup.
            </p>
          </div>

          {/* Email Signup */}
          <div className="opacity-0 animate-fade-in-up animation-delay-600 pt-4">
            <EmailSignup />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 pb-8 pt-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="opacity-0 animate-fade-in-up animation-delay-800">
            <SocialLinks />
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground/60 text-xs font-body">
            © 2026 Chai Culture. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;