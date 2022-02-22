import React from "react";
import BannerEduSection from "../components/EducationPage/BannerEduSection/BannerEduSection";
import CollegeSection from "../components/EducationPage/CollegeSection/CollegeSection";
import Navbars from "../components/Navbars/Navbars";
import Top from "../components/Top/Top";

function Education() {
  return (
    <div>
      <Navbars />
      <BannerEduSection />
      <CollegeSection />
      <Top />
    </div>
  );
}

export default Education;
