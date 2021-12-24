import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {


 
    return (
        
          <div className='navBar'>
          <Link className="Link" to="/">
            <h4>LANDING PAGE</h4>
          </Link>
          <Link className="Link" to="/home">
            <h4>HOME PAGE</h4>
          </Link>
          <Link className="Link" to="/activity">
            <h4>ADD TOURIST ACTIVITIES</h4>
          </Link>
          </div>
          
  )
}