import React from 'react'
import buildingImage from "../images/building.jpg"

const HomePage = () => {
  return (
    <div className="container text-center">
        <img src={buildingImage} className="buildingImage " />
    </div>
  )
}

export default HomePage