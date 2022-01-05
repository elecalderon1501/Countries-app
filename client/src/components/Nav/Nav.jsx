import React from 'react'
import { Link } from 'react-router-dom'
import '../Nav/Nav.css'

export default function Nav() {
  return (
    <div className="navBar">
      <Link className="LinkNav" to="/">
        <h4>Start</h4>
      </Link>
      <Link className="LinkNav" to="/activity">
        <h4>Add Activity</h4>
      </Link>
    </div>
  )
}
