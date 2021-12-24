import './Card.css'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Card({ id, name, flags, continents }) {
  return (
    <>
      <div className="All">
        <div className="Container" key={id}>
          <div className="ImageContainer">
          <Link className="Link" to={`/countries/${id}`}>
            <img className="Image" src={flags} alt="flag" />
            </Link>
          </div>
          <div className="TextContainer">
            <h1 className="Name">
            <Link className="Link" to={`/countries/${id}`}>
              {name}
              </Link>
              <Link className="Link" to={`/countries/${id}`}>
                ({id}){' '}
              </Link>{' '}
            </h1>{' '}
            <h2 className="Continents">{continents}</h2>
          </div>
        </div>
      </div>
    </>
  )
}
