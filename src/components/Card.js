import React from 'react'
import { Button } from './Button'
import './cards.css'
function Card({brand,image,price}) {
  return (
    <div className="card text-center">
      <figure className='img-container'>
      <img src={image} alt="" className="card-img-top"/>
      </figure>
    
      <div className="card-body">
        <h4 className="card-title ">
         {brand}
        </h4>
        <p className="card-text text-secondary"> {price}
        </p>
        <Button name={"Comprar"}/>

      </div>
    </div>
  )
}

export default Card
