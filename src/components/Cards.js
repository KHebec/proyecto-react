import React from 'react'
import Card from './Card'
import item from '../components/db.json'

const items= item.filter(elemento => elemento.id < 5)
function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100 ">
            <div className="row">
            {
            items.map(card =>(
                <div className='col-md-3 col-sm-6'><Card brand={card.brand}image={card.image}price={card.price}key={card.id}/></div>
            ))
           }
            </div>
        </div>
    )
}

export default Cards
