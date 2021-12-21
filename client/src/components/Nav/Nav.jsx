import React from 'react'
import { Link } from 'react-router-dom'
import  './Nav.css'

export default function Nav() {
  return (
    <>
      <nav className="Container">
        <div className="Buttons">
          <Link className="Link" to="/">
            LANDING PAGE
          </Link>
          <Link className="Link" to="/home">
            HOME PAGE
          </Link>
          <Link className="Link" to="/postActivity">
            ADD TOURIST ACTIVITIES
          </Link>
        </div>
      </nav>
    </>
  )
}
