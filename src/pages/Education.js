import React from 'react';
import BannerEduSection from '../components/EducationPage/BannerEduSection/BannerEduSection';
import CollegeSection from '../components/EducationPage/CollegeSection/CollegeSection';
import Navbars from '../components/Navbars/Navbars';


function Education() {
  return <div>
    <Navbars />
    <BannerEduSection />
    <CollegeSection />
  </div>;
}

export default Education;
