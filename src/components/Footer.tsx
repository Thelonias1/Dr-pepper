import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream py-16 border-t-4 border-brand-gold relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-6 max-w-md">
          <h3 className="text-4xl text-brand-gold">The 23rd Flavor</h3>
          <p className="font-body text-lg leading-relaxed text-brand-cream/80 italic">
            "In 1885, a pharmacist in Waco created a drink so weird, soda jerks had to invent a new way to describe it. We're still at it."
          </p>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-2xl tracking-widest uppercase">The Pepper Pack</h4>
          <p className="font-body text-lg">
            Get 10% Off & Learn Why Prunes Aren't Actually an Ingredient.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent border-b-2 border-brand-cream focus:border-brand-gold outline-none px-2 py-3 font-body transition-colors"
            />
            <button type="submit" className="bg-brand-gold text-brand-dark px-6 font-bold uppercase tracking-wider hover:bg-brand-cream transition-colors flex items-center justify-center">
              Sign Up <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      
      {/* Decorative large text */}
      <div className="absolute -bottom-10 -right-10 text-[15rem] leading-none text-brand-maroon/20 font-bold select-none pointer-events-none">
        1885
      </div>
    </footer>
  );
}
