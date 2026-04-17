import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Share2 } from "lucide-react";
import { cn } from "../lib/utils";

// Mock data (same as MerchGrid but flattened for simple lookup)
const ALL_PRODUCTS = [
  { id: "c1", name: "10-2-4 Ringer Tee", price: "$35", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&auto=format&fit=crop", stock: 12, desc: "A replica of the classic '70s promotional tee. Soft like you've washed it 100 times." },
  { id: "c2", name: "The Waco Cooler", price: "$45", img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=1200&auto=format&fit=crop", stock: 3, desc: "Keeps 6 cans chilled for 23 hours." },
  { id: "c3", name: "Faded Dad Cap", price: "$28", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=1200&auto=format&fit=crop", stock: 45, desc: "Sun-faded maroon. Pre-curved bill." },
  { id: "c4", name: "Ice Cold Koozie Set", price: "$18", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=1200&auto=format&fit=crop", stock: 1, desc: "Neoprene armor for your glass bottles." },
  { id: "h1", name: "Vintage Maroon Hoodie", price: "$65", img: "https://images.unsplash.com/photo-1556821840-0a63f95609a7?w=1200&auto=format&fit=crop", stock: 15, desc: "Heavyweight fleece. As deep as the 23rd flavor." },
  { id: "h2", name: "The 1885 Beanie", price: "$32", img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=1200&auto=format&fit=crop", stock: 2, desc: "Chunky knit for cold Texas mornings." },
  { id: "h3", name: "Gritty Asphalt Crewneck", price: "$55", img: "https://images.unsplash.com/photo-1516826957135-700ede19c6ce?w=1200&auto=format&fit=crop", stock: 8, desc: "Washed black terry with a tonal chenille logo." },
  { id: "h4", name: "Hot Recipe Mug", price: "$22", img: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=1200&auto=format&fit=crop", stock: 100, desc: "Thick ceramic. Lemon slice not included." },
];

const SIZES = [
  { id: "s", label: "GULP (S)" },
  { id: "m", label: "BIG GULP (M)" },
  { id: "l", label: "TEXAS SIZE (L)" }
];

export default function Product() {
  const { id } = useParams();
  const product = ALL_PRODUCTS.find(p => p.id === id) || ALL_PRODUCTS[0];
  const [size, setSize] = useState("m");
  const [showTooltip, setShowTooltip] = useState(false);

  const isLowStock = product.stock < 5;
  const atcText = isLowStock ? "SECURE THE LAST DROP" : "ADD A PEPPER TO YOUR STEP";

  return (
    <div className="bg-brand-cream min-h-screen pb-32">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-brand-dark/60 hover:text-brand-maroon uppercase tracking-widest font-bold text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to The Drop
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-brand-dark overflow-hidden group border-4 border-brand-maroon/10">
            <img 
              src={product.img} 
              alt={product.name} 
              ref={(node) => { if (node) { node.style.setProperty("view-transition-name", `product-${product.id}`); } }}
              className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* The 23 Flavor Badge Tooltip */}
            <div 
              className="absolute top-4 left-4"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <div className="bg-brand-gold text-brand-dark px-4 py-2 font-bold uppercase tracking-widest cursor-help shadow-lg backdrop-blur-sm relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-maroon animate-ping"></span> 
                Lore Badge
              </div>
              <div className={cn(
                "absolute top-full left-0 mt-2 bg-brand-dark text-brand-cream p-4 w-64 text-sm font-body italic border-l-4 border-brand-maroon shadow-2xl transition-all duration-300 origin-top-left",
                showTooltip ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              )}>
                "This item contains 2 of the 23 secret vibes. Prune is not one of them."
              </div>
            </div>
            
          </div>

          {/* Details */}
          <div className="flex flex-col pt-8">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-5xl md:text-7xl text-brand-maroon uppercase tracking-tighter leading-none">{product.name}</h1>
              <button className="text-brand-dark/40 hover:text-brand-maroon transition-colors pt-2">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-3xl text-brand-gold font-body italic mb-8">{product.price}</p>
            
            <p className="font-body text-xl text-brand-dark/80 mb-12 border-l-4 border-brand-gold pl-6 py-2">
              {product.desc}
            </p>
            
            {/* Swatches */}
            <div className="mb-12">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="uppercase tracking-widest font-bold text-brand-dark">Select Vibe Size</h3>
                <button className="text-sm font-body italic text-brand-dark/50 hover:text-brand-gold underline decoration-brand-gold/30">Size Guide</button>
              </div>
              <div className="flex gap-4">
                {SIZES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSize(s.id)}
                    className={cn(
                      "flex-1 py-4 uppercase font-bold tracking-wider text-sm md:text-base border-2 transition-all",
                      size === s.id 
                        ? "border-brand-maroon bg-brand-maroon text-brand-cream shadow-[4px_4px_0_0_#C5A059]" 
                        : "border-brand-dark/20 text-brand-dark hover:border-brand-maroon"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Sticky ATC Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-brand-dark p-4 md:p-6 border-t-4 border-brand-gold z-50 flex items-center justify-between shadow-2xl backdrop-blur-xl bg-opacity-95">
        <div className="hidden md:flex flex-col">
          <span className="text-brand-cream font-bold uppercase tracking-widest">{product.name}</span>
          <span className="text-brand-gold font-body italic">{product.price} • Size: {size.toUpperCase() }</span>
        </div>
        
        <button className="w-full md:w-auto flex-1 md:flex-none max-w-xl mx-auto md:mx-0 bg-brand-maroon hover:bg-brand-gold text-brand-cream hover:text-brand-dark px-8 py-4 font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(197,160,89,0.5)]">
          {atcText}
        </button>
      </div>
    </div>
  );
}
