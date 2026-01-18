import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  glowColor?: "green" | "purple";
}

export function PhoneMockup({ src, alt, className, glowColor = "green" }: PhoneMockupProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("relative mx-auto max-w-[300px]", className)}
    >
      {/* Glow behind phone */}
      <div className={cn(
        "absolute -inset-4 rounded-[3rem] opacity-40 blur-2xl transition-all duration-1000",
        glowColor === "green" ? "bg-primary/30" : "bg-secondary/30"
      )} />
      
      {/* Phone Frame */}
      <div className="relative z-10 bg-black rounded-[2.5rem] p-3 border-4 border-white/10 shadow-2xl overflow-hidden">
        {/* Dynamic Island / Notch area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20" />
        
        {/* Screen Content */}
        <div className="relative rounded-[2rem] overflow-hidden bg-background aspect-[9/19]">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover"
          />
          
          {/* Screen Glare */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
