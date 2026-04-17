import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import MerchGrid from "../components/MerchGrid";
import HotTake from "../components/HotTake";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Marquee />
      <MerchGrid />
      <HotTake />
    </div>
  );
}
