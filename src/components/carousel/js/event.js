import React from 'react'
import {events} from "./evensList";
import "../css/carousel.css"

function Event() {
    return (
        events.map(e=>(
            <div className="item">
            <img src={e.img} alt={e.discription+".img"}></img>
            </div>
        ))
    )
}

export default Event
