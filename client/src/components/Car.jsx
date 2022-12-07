import React from 'react'
import "./card.css"

export default function Car(props) {
  return (
    <div className="card">
      <h4 className='carName'>{props.carName}</h4 >
      <img src={props.image} />
      <div div className='detailCard'>
        <h6 className='details'>Mileage: {props.mileage}</h6>
        <h6 className='details'>Location: {props.location}</h6>
        <h6 className='details'>Engine: {props.engine}</h6>
        <h6 className='details'>Transmission: {props.transmission}</h6>
        <h5 className='price'>{props.price}$</h5>
        <button className='util_btn' style={{
          fontSize : "14px"
        }}>More details</button>
      </div>
    </div>
  )
}
