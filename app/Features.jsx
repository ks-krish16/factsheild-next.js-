import React from 'react'
import './Features.css'

function Features(props) {
  return (
    <div className="features">
            <div className="feature">
                
                <h3>{props.title}</h3>
                <span>{props.msg}</span>
            </div>
    </div>        
  )
}

export default Features
