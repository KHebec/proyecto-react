import React from 'react'
import Card from './Card'

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100 ">
            <div className="row">
            <div className="col-12 col-md-3 ">
                <Card/>
            </div>
            <div className="col-12 col-md-3 ">
                <Card/>
            </div>
            <div className="col-12 col-md-3 ">
                <Card/>
            </div>
            <div className="col-12 col-md-3 ">
                <Card/>
            </div>
            </div>
        </div>
    )
}

export default Cards
