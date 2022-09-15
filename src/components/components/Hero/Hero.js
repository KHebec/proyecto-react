import React from 'react'
import "./Hero.css";
import heroVideo from "../../media/heroVideo.mp4";


const Hero = () => {
  return (
    <div className='hero-container'>
      <video className='video' src={heroVideo} autoPlay loop muted />
      <h1 className='hero-text1'>Spirits</h1>
      <p className='hero-p'>Tus bebidas favoritas en un solo lugar.</p>
      {/* Toma un descanso, toma una copa. */}
    </div>
  )
}

export default Hero
