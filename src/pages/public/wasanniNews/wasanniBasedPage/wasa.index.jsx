import WasaHeroSection from "./wasa.heroSection";
import WasaGrid from "./countryBasedWasaSection";
import AdvertisingSection from "@/components/advertising/advertisingSection";
import { useParams } from "react-router-dom";

const WasaPage = () => {
  const { subCategory } = useParams();
  return (
    <div className="flex gap-10 w-full justify-center relative">
      <AdvertisingSection />
      <div>
        <WasaHeroSection currentTab={subCategory} />
        <WasaGrid />
      </div>
    </div>
  );
};

export default WasaPage;
