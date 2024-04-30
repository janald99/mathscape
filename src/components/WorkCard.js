import "./WorkCardStyles.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="program-card">
    <img src={props.imgsrc} alt="program1"/>
    <h2 className="program-title">{props.title}</h2>
    <div className="program-details">
        <p>{props.text}</p>
    </div>
</div>
  )
}

export default WorkCard