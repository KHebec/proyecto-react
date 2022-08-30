import "./Banner.css";
import imagen from "./../../assets/images/whisky.jpg";



import React from 'react'

const Banner = () => {
    return (
    <div>
        <img className="Banner" src={imagen} alt="foto"></img>
    </div>
    )
}

export default Banner;