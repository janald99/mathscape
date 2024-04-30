import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgProject from '../components/HeroImgProject';
import Work from '../components/Work';

const Programs = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgProject heading="Our Programs." text="Some programmes offered."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Programs