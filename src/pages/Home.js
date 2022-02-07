import React from "react";
import BannerSection from "../components/HomePage/BannerSection/BannerSection";
import TechnologiesSection from "../components/HomePage/TechnologiesSection/TechnologiesSection";
import IntroSection from "../components/HomePage/IntroSection/IntroSection";
import DevStackSection from "../components/HomePage/DevStackSection/DevStackSection";
import WhoAmISection from "../components/HomePage/WhoAmISection/WhoAmISection";
import Navbars from "../components/Navbars/Navbars";
import Top from "../components/Top/Top";

function Home() {
  return (
    <div>
      <Navbars />
      <BannerSection />
      <TechnologiesSection />
      <IntroSection />
      <DevStackSection />
      <WhoAmISection />
      <Top />
    </div>
  );
}

export default Home;
