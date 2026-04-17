const FLAVORS = [
  "Bold", "Cherry-ish", "Prune-ish?", "Amaretto-adjacent", "Un-Cola",
  "Singular", "Peculiar", "Satisfying", "Deep Maroon", "Vaguely Vanilla",
  "Spiced", "Enigmatic", "Texan", "Carbonated Mystery", "1885 Vintage",
  "Nutmeg Hint", "Complex", "Misunderstood", "Defiant", "Inimitable",
  "Aromatic", "Syrupy Goodness", "Doctor's Orders"
];

export default function Marquee() {
  return (
    <div className="w-full bg-brand-gold text-brand-dark py-4 overflow-hidden flex border-y-4 border-brand-dark relative z-20">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {FLAVORS.map((flavor, i) => (
          <span key={i} className="text-3xl md:text-5xl uppercase tracking-widest mx-8 select-none opacity-80 hover:opacity-100 transition-opacity">
            {flavor} <span className="text-brand-maroon mx-4 opacity-50">•</span>
          </span>
        ))}
      </div>
      {/* Duplicate for seamless looping */}
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] absolute top-1/2 -translate-y-1/2 left-full">
        {FLAVORS.map((flavor, i) => (
          <span key={`dup-${i}`} className="text-3xl md:text-5xl uppercase tracking-widest mx-8 select-none opacity-80 hover:opacity-100 transition-opacity">
            {flavor} <span className="text-brand-maroon mx-4 opacity-50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
