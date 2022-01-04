import '../Landing/Landing.css'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Landing() {
  return (
      <div className="BackGroundLanding">
        <div className= "Container">
        <Link to="/home" className="Button" style={{ textDecoration: 'none' }}>
          <h2 className="Text">The World</h2>
        </Link>
      
      </div>
    </div>
  )
}
