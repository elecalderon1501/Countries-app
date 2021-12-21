import './Card.css'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Card({ id, flags, name, continents }) {
  return (
    <>
      <div className="All">
        <div className="Container" key={id}>
          <div className="ImageContainer">
            <img className="Image" src={flags} alt="flag" />
          </div>
          <div className="TextContainer">
            <h1 className="Name">
              {name}
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
