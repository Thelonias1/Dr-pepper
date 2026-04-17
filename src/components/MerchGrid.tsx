import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const PRODUCTS = {
  chilled: [
    { id: "c1", name: "10-2-4 Ringer Tee", price: "$35", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop", stock: 12 },
    { id: "c2", name: "The Waco Cooler", price: "$45", img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&auto=format&fit=crop", stock: 3 },
    { id: "c3", name: "Faded Dad Cap", price: "$28", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop", stock: 45 },
    { id: "c4", name: "Ice Cold Koozie Set", price: "$18", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop", stock: 1 },
  ],
  hot: [
    { id: "h1", name: "Vintage Maroon Hoodie", price: "$65", img: "https://images.unsplash.com/photo-1556821840-0a63f95609a7?w=800&auto=format&fit=crop", stock: 15 },
    { id: "h2", name: "The 1885 Beanie", price: "$32", img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&auto=format&fit=crop", stock: 2 },
    { id: "h3", name: "Gritty Asphalt Crewneck", price: "$55", img: "https://images.unsplash.com/photo-1516826957135-700ede19c6ce?w=800&auto=format&fit=crop", stock: 8 },
    { id: "h4", name: "Hot Recipe Mug", price: "$22", img: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&auto=format&fit=crop", stock: 100 },
  ]
};

export default function MerchGrid() {
  const { mode } = useTheme();
  const currentProducts = PRODUCTS[mode];

  return (
    <section id="shop" className="py-24 bg-brand-dark px-4 min-h-screen relative">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/asphalt-dark.png')"}}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-6xl text-brand-cream uppercase tracking-tight">The Pepper <br/>Wardrobe</h2>
          <span className="text-brand-gold font-body italic border-b border-brand-gold pb-1">{mode === 'chilled' ? 'Summer Selects' : 'Winter Drops'}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProducts.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group block relative border-2 border-transparent hover:border-brand-gold transition-all duration-300">
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-maroon/20">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* 23 Flavor Badge (Tooltip concept) */}
                <div className="absolute top-4 left-4 bg-brand-dark text-brand-cream text-xs font-bold px-3 py-1 uppercase tracking-widest border border-brand-cream/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  2 of 23 Vibes
                </div>

                {p.stock < 5 && (
                  <div className="absolute bottom-4 left-4 bg-brand-maroon text-brand-cream text-xs font-bold px-3 py-1 uppercase tracking-widest animate-pulse">
                    Almost Gone
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex justify-between items-baseline px-2">
                <h3 className="text-xl text-brand-cream uppercase tracking-wide">{p.name}</h3>
                <span className="text-brand-gold font-body italic text-lg">{p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
