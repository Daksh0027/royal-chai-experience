import { useState } from "react";
import { Send, Check, Loader2 } from "lucide-react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setErrorMessage("Please enter your email");
      setStatus("error");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      setStatus("error");
      return;
    }

    setStatus("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 animate-fade-in-up">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <p className="text-cream font-elegant text-xl">Welcome to the royal family!</p>
        <p className="text-muted-foreground text-sm">We'll notify you when we launch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email address"
              className="w-full px-5 py-4 bg-brown-rich/80 border border-primary/30 rounded-lg 
                         text-cream placeholder:text-muted-foreground 
                         focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                         transition-all duration-300 font-body"
            />
            {status === "error" && (
              <p className="absolute -bottom-6 left-0 text-copper text-sm">{errorMessage}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="group px-6 py-4 bg-primary text-primary-foreground rounded-lg font-display font-medium
                       hover:bg-gold-light transition-all duration-300 
                       disabled:opacity-70 disabled:cursor-not-allowed
                       shadow-gold hover:shadow-[0_4px_40px_hsl(43_74%_49%_/_0.4)]
                       flex items-center justify-center gap-2 min-w-[140px]"
          >
            {status === "loading" ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>Notify Me</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
      <p className="text-muted-foreground text-xs mt-8 text-center">
        Be the first to experience the royal tradition. No spam, ever.
      </p>
    </form>
  );
};

export default EmailSignup;
