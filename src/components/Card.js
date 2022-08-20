import React from 'react'
import img1 from '../assets/img1.jpg'
import './cards.css'
function Card() {
  return (
    <div className="card text-center">
      <img src={img1} alt="" className="card-img-top"/>
      <div className="card-body">
        <h4 className="card-title">
          My title
        </h4>
        <p className="card-text text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore earum, consectetur quaerat optio aperiam ea omnis asperiores distinctio aut molestiae impedit aliquid eaque aliquam autem nesciunt a. Ullam, corporis.
        </p>
        <a href= "#!" className= "btn btn-outline-secondary rounded-0">
          Go to this website
        </a>

      </div>
    </div>
  )
}

export default Card
