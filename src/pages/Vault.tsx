import { useState } from "react";
import { Lock, FileText, Download, ArrowRight, EyeOff } from "lucide-react";

export default function Vault() {
  const [unlocked, setUnlocked] = useState(false);

  if (unlocked) {
    return (
      <div className="bg-[#0a0305] min-h-screen text-brand-cream py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')"}}></div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-6xl md:text-8xl text-brand-gold uppercase tracking-tighter mb-4">The Lore Vault</h1>
          <p className="font-body text-xl text-brand-cream/60 mb-16 max-w-2xl border-l-2 border-brand-maroon pl-4">
            Welcome to the inner circle. Access the redacted files, the original 1885 ad mats, and the 23-hour pre-release drops.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-dark border-2 border-brand-maroon/30 p-8 hover:border-brand-gold transition-colors group cursor-pointer">
              <FileText className="w-12 h-12 text-brand-maroon mb-6 group-hover:text-brand-gold transition-colors" />
              <h3 className="text-3xl uppercase tracking-widest mb-4">The Secret Recipe Notes</h3>
              <p className="font-body text-brand-cream/70 mb-6 line-clamp-3">
                Dec 1st, 1885. Waco, Texas. Morrison's Old Corner Drug Store. A mix of ███████, carbonated water, and a hint of █████████ immediately proved popular. The distinct flavor comes from...
              </p>
              <button className="font-bold uppercase tracking-widest text-brand-gold flex items-center gap-2 group-hover:gap-4 transition-all">
                Read Full Redacted File <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-brand-dark border-2 border-brand-maroon/30 p-8 hover:border-brand-gold transition-colors group cursor-pointer flex flex-col justify-between">
              <div>
                <Download className="w-12 h-12 text-brand-maroon mb-6 group-hover:text-brand-gold transition-colors" />
                <h3 className="text-3xl uppercase tracking-widest mb-4">1885 Ad Wallpapers</h3>
                <p className="font-body text-brand-cream/70 mb-6">
                   High-res scans of the original "Vim, Vigor, and Vitality" campaign posters formatted for your device.
                </p>
              </div>
              <button className="font-bold uppercase tracking-widest text-brand-gold flex items-center gap-2 group-hover:gap-4 transition-all">
                Download Pack [ZIP] <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-dark min-h-screen py-24 px-4 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-brand-maroon mix-blend-multiply"></div>
      
      <div className="relative z-10 max-w-lg w-full bg-brand-cream p-10 md:p-14 shadow-2xl border-t-8 border-brand-maroon text-center">
        <Lock className="w-12 h-12 text-brand-gold mx-auto mb-6" />
        <h2 className="text-4xl text-brand-maroon uppercase tracking-widest mb-4">Dr Pepper Perks</h2>
        <p className="font-body text-lg text-brand-dark/80 mb-8">
          The 23rd flavor is a secret. The Vault is too. Unlock early drops and redacted lore.
        </p>
        
        <form 
          onSubmit={(e) => { e.preventDefault(); setUnlocked(true); }}
          className="space-y-4"
        >
          <div>
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-transparent border-2 border-brand-dark focus:border-brand-gold outline-none px-4 py-4 font-bold uppercase tracking-widest transition-colors text-center"
              required
            />
          </div>
          <button type="submit" className="w-full bg-brand-dark hover:bg-brand-gold text-brand-cream hover:text-brand-dark px-8 py-4 font-bold uppercase tracking-widest transition-all duration-300 flex justify-center items-center gap-2 group">
            Unlock The Vault <EyeOff className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </form>
        
        <p className="mt-6 text-sm text-brand-dark/50 font-body italic">
          By joining, you agree to not discuss Mr. Pibb in our presence.
        </p>
      </div>
    </div>
  );
}
