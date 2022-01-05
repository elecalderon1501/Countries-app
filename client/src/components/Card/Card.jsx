import './Card.css'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Card({ id, name, flags, continents }) {
  return (
    <>
      <div className="AllCard">
        <div className="Container" key={id}>
          <div className="ImageContainer">
            <Link className="LinkCard" to={`/countries/${id}`}>
              <img className="ImageCard" src={flags} alt="flag" />
            </Link>
          </div>
          <div className="TextContainer">
            <h1 className="Name">
              <Link className="LinkCard" to={`/countries/${id}`}>
                {name}
              </Link>
              <br />
              <Link className="LinkCard" to={`/countries/${id}`}>
                ({id})
              </Link>
            </h1>
            <h2 className="Continents">{continents}</h2>
          </div>
        </div>
      </div>
    </>
  )
}
