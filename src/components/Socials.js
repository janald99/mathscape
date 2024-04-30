import "./SocialsStyles.css"

import React from 'react'

import { FaMailBulk, FaInstagram, FaWhatsapp} from "react-icons/fa"

const Socials = () => {
  return (
    <div className="socials">
      <div className="email">
          <h4> <FaMailBulk size={20} 
              style={{color: "#000080",
              marginRight: "2rem" }}
              />
          <a href="mailto:roanneho26@hotmail.com">roanneho26@gmail.com</a>
          </h4>
      </div>
      <div className="whatsapp">
          <h4> <FaWhatsapp size={20} 
              style={{color: "#000080",
              marginRight: "2rem" }}
              />
            <a href="tel:+6596862430">+65 9686 2430</a>
          </h4>
      </div>
      <div className="instagram">
          <h4> <FaInstagram size={20} 
              style={{color: "#000080",
              marginRight: "2rem" }}
              />
            <a href="https://www.instagram.com/mathscapelearning/">
              mathscapelearning
            </a>
          </h4>
      </div>
  
    </div>
  )
}

export default Socials