import React from "react";
import BannerSection from "../components/HomePage/BannerSection/BannerSection";
import TechnologiesSection from "../components/HomePage/TechnologiesSection/TechnologiesSection";
import IntroSection from "../components/HomePage/IntroSection/IntroSection";
import DevStackSection from "../components/HomePage/DevStackSection/DevStackSection";
import WhoAmISection from "../components/HomePage/WhoAmISection/WhoAmISection";
import Navbars from "../components/Navbars/Navbars";

function Home() {
  return (
    <div>
      <Navbars />
      <BannerSection />
      <TechnologiesSection />
      <IntroSection />
      <DevStackSection />
      <WhoAmISection />
    </div>
  );
}

export default Home;
