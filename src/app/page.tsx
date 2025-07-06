import FleetCategories from "@/components/fleet-categories";
import Footer from "../components/footer";
import Header from "../components/header";
import Rental from "@/components/rental";
import BuyUsedEquipment from "@/components/buy-used-equipment";
import Equipment from "@/components/equipment";
import Hero from "@/components/hero";
import SafetyTraining from "@/components/safety-training";
import Solution from "@/components/solution";
import Explore from "@/components/explore";
import News from "@/components/news";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Equipment />
        <BuyUsedEquipment />
        <Rental />
        <FleetCategories />
        <SafetyTraining/>
        <Solution/>
        <Explore/>
        <News/>
      </main>
      <Footer />
    </>
  );
}
