import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="program-heading">Programs</h1>
        <div className="program-container">
            {WorkCardData.map((val, index) => {
                return(
                    <WorkCard
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work