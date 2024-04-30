import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgProject from '../components/HeroImgProject';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgProject heading="About Us." text="Singapore’s Math powerhouse aligned with the latest MOE syllabus🏅Pri & Secondary levels 📖 Join us to discover the joy of learning!"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About