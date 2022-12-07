import React from 'react'
import "./utility.css"

export default function Utility() {
  return (
    <div style={{
        maxHeight : "90vh"
    }}>
        <div className='util_box'>
            Auto World          
        </div>
        <div className='util_box'>
            Basic Information        
        </div>
        <div className='util_box'>
            Car Cost            
        </div>
        <div className='util_box'>
            Search Region          
        </div>
        <div className='util_box'>
            Vehicle condition            
        </div>
        <div className='util_box'>
            Add characteristics
        </div>
        <div className='util_box'>
            Color
        </div>
        <div className='util_box'>
            <p>Found cars: 12 324</p>
            <button className='util_btn'>
                Show
            </button>          
        </div>
    </div>
  )
}
