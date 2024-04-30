import "./AboutContentStyles.css";

import React from 'react'

import { Link } from "react-router-dom";

// import paragliding from "../assets/paragliding.jpg";
// import bungee from "../assets/bungee.jpg";


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>About MathScape</h1>
            <p>Singapore’s Math powerhouse aligned with the latest MOE syllabus🏅Pri & Secondary levels 📖 Join us to discover the joy of learning!</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                {/* <div className="img-stack top">
                    <img src={bungee} className="img" alt="pic1"/>
                </div>
                <div className="img-stack bottom">
                    <img src={paragliding} className="img" alt="pic2"/>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default AboutContent