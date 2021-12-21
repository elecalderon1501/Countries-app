import Card from '../Card/Card'
import React from 'react'

export default function Cards({ countries }) {
  return (
    <>
      {countries?.map(country => (
        <Card
          key={country.id}
          id={country.id}
          flags={country.flags}
          name={country.name}
          continents={country.continent}
        />
      ))}
    </>
  )
}
