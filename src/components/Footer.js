import "./FooterStyles.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4><FaHome size={20} 
                        style={{color: "#000080",
                        marginRight: "2rem"}}
                        />
                    Singapore
                    </h4>
                </div>
                <div className="phone">
                    <h4> <FaPhone size={20} 
                        style={{color: "#000080",
                        marginRight: "2rem"}}
                        />
                    +65 96862430
                    </h4>
                </div>
                <div className="email">
                    <h4> <FaMailBulk size={20} 
                        style={{color: "#000080",
                        marginRight: "2rem" }}
                        />
                    roanneho26@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4> Follow Us</h4>
                <div className="social">
                    <FaLinkedin size={30} 
                        style={{color: "#000080",
                        marginRight: "1rem" }}
                        />
                    <FaInstagram size={30} 
                        style={{color: "#000080",
                        marginRight: "1rem" }}
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer