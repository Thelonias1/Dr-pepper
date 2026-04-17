import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";
import { Lock } from "lucide-react";

export default function Navbar() {
  const { mode, setMode } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-brand-maroon bg-brand-cream/90 backdrop-blur-md transition-colors duration-500">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold tracking-tighter text-brand-maroon uppercase">
          Dr Pepper <span className="text-brand-gold text-shadow-gold italic">Supply</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-2 bg-brand-maroon/10 p-1 rounded-full">
          <button
            onClick={() => setMode("chilled")}
            className={cn(
              "px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300",
              mode === "chilled" ? "bg-brand-maroon text-brand-cream shadow-md" : "text-brand-maroon hover:bg-brand-maroon/20"
            )}
          >
            Chilled
          </button>
          <button
            onClick={() => setMode("hot")}
            className={cn(
              "px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300",
              mode === "hot" ? "bg-brand-gold text-brand-dark shadow-md" : "text-brand-dark hover:bg-brand-gold/30"
            )}
          >
            Hot
          </button>
        </div>

        <nav className="flex items-center space-x-6">
          <Link to="/vault" className="group flex items-center space-x-2 font-bold uppercase tracking-wider text-sm text-brand-dark hover:text-brand-maroon transition-colors">
            <Lock className="w-4 h-4 group-hover:text-brand-gold transition-colors" />
            <span className="relative">
              The Vault
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-maroon group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
          <Link to="/" className="font-bold uppercase tracking-wider text-sm bg-brand-maroon text-brand-cream px-5 py-2.5 rounded hover:bg-brand-dark transition-colors border border-transparent hover:border-brand-gold">
            Cart (0)
          </Link>
        </nav>
      </div>
    </header>
  );
}
