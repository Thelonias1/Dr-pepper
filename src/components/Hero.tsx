import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { mode } = useTheme();

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image / Video Simulation */}
      <div className="absolute inset-0 z-0">
        <img 
          src={mode === "chilled" 
            ? "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2000&auto=format&fit=crop" // represents a sweating cold cola can
            : "https://images.unsplash.com/photo-1574488390709-644b9173d1b6?q=80&w=2000&auto=format&fit=crop" // hot drink / steam vibe
          }
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity brightness-50 contrast-125 transition-all duration-1000 scale-105"
          alt="Cinematic Can"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-7xl md:text-9xl text-brand-cream tracking-tighter drop-shadow-2xl mb-8 mix-blend-overlay opacity-90 uppercase">
          Always One <br/><span className="text-brand-gold italic">Of One</span>
        </h1>
        
        <Link 
          to="#shop"
          className="group relative px-8 py-4 bg-brand-maroon text-brand-cream text-xl font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            Shop The Drop <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 opacity-50 text-brand-cream/50 text-sm font-mono animate-pulse">
        <span>ASMR_001.MP4</span>
        <span>[SWEATING CAN LOOP]</span>
      </div>
    </section>
  );
}
