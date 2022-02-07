import React from "react";
import BannerExtraSection from "../components/ExtrasPage/BannerExtraSection/BannerExtraSection";
import PhotographySection from "../components/ExtrasPage/PhotographySection/PhotographySection";
import WritingSection from "../components/ExtrasPage/WritingSection/WritingSection";
import Navbars from "../components/Navbars/Navbars";
import Top from "../components/Top/Top";

function Contacto() {
  return (
    <div>
      <Navbars />
      <BannerExtraSection />
      <PhotographySection />
      <WritingSection />
      <Top />
    </div>
  );
}

export default Contacto;
