import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  glow?: boolean;
}

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, children, variant = "primary", glow = true, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-display font-bold tracking-wider uppercase transition-all duration-300 rounded-lg group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
      secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary",
      outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10",
    };

    const glowStyles = glow ? "shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)]" : "";
    const purpleGlow = variant === 'secondary' && glow ? "shadow-[0_0_20px_rgba(189,0,255,0.4)] hover:shadow-[0_0_30px_rgba(189,0,255,0.6)]" : "";

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], glowStyles, purpleGlow, className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
      </motion.button>
    );
  }
);
NeonButton.displayName = "NeonButton";
