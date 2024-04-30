import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/background.jpg";

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <h1>Welcome to MathScape Learning.</h1>
            <div>
                <Link to="/programs" className="btn">Programs</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg