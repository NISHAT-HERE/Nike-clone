import BeastOfAirMax from './components/BestOfAirMax';
import HeroSection from './components/HeroSection';
import Featured from './components/Featured';
import GearUp from './components/GearUp';
import DontMiss from './components/DontMiss';
import TheEssentials from './components/TheEssentials';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BeastOfAirMax />
      <Featured />
      <GearUp />
      <DontMiss />
      <TheEssentials />
    </main>
  );
}
