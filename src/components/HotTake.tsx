import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const UGCS = [
  { user: "@apologist_tx", text: "If you don't heat it up with a lemon slice in December, you're not doing it right.", img: "https://images.unsplash.com/photo-1544885834-84578b9e6b6f?w=400&h=400&fit=crop" },
  { user: "@vintagehunter", text: "Found the 70s crewneck to match my hot Dr Pepper mug. Elite combo.", img: "https://images.unsplash.com/photo-1611082590214-419b4fcb51cb?w=400&h=400&fit=crop" },
  { user: "@flavor23", text: "It sounds crazy until you try it. Trust the process.", img: "https://images.unsplash.com/photo-1510427306353-066cb31d044e?w=400&h=400&fit=crop" },
];

export default function HotTake() {
  return (
    <section className="py-24 bg-brand-cream border-y-[12px] border-brand-maroon relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3 space-y-6">
          <h2 className="text-6xl text-brand-maroon uppercase tracking-tighter leading-none mb-4">
            Real Texans <br/>Drink It <span className="text-brand-gold text-shadow-gold">Hot?</span>
          </h2>
          <p className="font-body text-lg text-brand-dark/80 max-w-md">
            The debate is settled. And yes, it's peculiar. Warm it up, add a lemon, and put it in a proper ceramic mug.
          </p>
          <Link to="/vault" className="inline-flex items-center gap-2 border-b-2 border-brand-maroon text-brand-maroon pb-1 font-bold uppercase tracking-wider hover:text-brand-gold hover:border-brand-gold transition-colors">
            Get The Original Recipe <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="md:w-2/3 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {UGCS.map((ugc, i) => (
            <div key={i} className="min-w-[300px] max-w-[300px] snap-center bg-brand-dark p-6 border-4 border-brand-maroon/20 hover:border-brand-gold transition-colors group relative">
              <div className="absolute -top-4 -right-4 text-6xl text-brand-gold opacity-20 font-serif">"</div>
              <img src={ugc.img} alt={ugc.user} referrerPolicy="no-referrer" className="w-full h-48 object-cover mb-6 mix-blend-luminosity grayscale group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-500" />
              <p className="font-body text-brand-cream/90 italic mb-4">"{ugc.text}"</p>
              <div className="text-brand-gold font-bold uppercase tracking-widest text-sm">{ugc.user}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
