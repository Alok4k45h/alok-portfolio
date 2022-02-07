import React from 'react';
import Navbars from '../components/Navbars/Navbars';
import BannerProSection from '../components/ProjectPage/BannerProSection/BannerProSection';
import ProjectSection from '../components/ProjectPage/ProjectSection/ProjectSection';
import Top from '../components/Top/Top';

function Project() {
  return <div>
    <Navbars />
    <BannerProSection />
    <ProjectSection />
    <Top />
  </div>; 
}

export default Project;
