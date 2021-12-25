import React from 'react'
import '../Home/FilterOrder.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  countryByContinent,
  countryByActivity,
  filterPopu,
} from '../../redux/actions/index'

export default function FilterOrder() {
  const dispatch = useDispatch()

  const activities = useSelector(state => state.activities)

  function handleCountryByContinent(e) {
    dispatch(countryByContinent(e.target.value))
    // setSort(e.target.value)
  }

  function handleCountryByActivity(e) {
    e.preventDefault()
    dispatch(countryByActivity(e.target.value))
    // setSort(e.target.value)
  }

  function handleFilterPopu(e) {
    e.preventDefault()
    dispatch(filterPopu(e.target.value))
    // setSort(e.target.value)
  }

  return (
    <div className="BackGround">
      <div className="FilterContinent">
        <select
          onChange={e => {
            handleCountryByContinent(e)
          }}
        >
          <option value="All">Filters By Continents</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      </div>

      <div className="FilterPopu">
        <select onChange={handleFilterPopu}>
          <option value="All">Sorts</option>
          <option value="A-Z">Countries A to Z</option>
          <option value="Z-A">Countries Z to A</option>
          <option value="ASC">Ascendant Population</option>
          <option value="DESC">Descendant Population</option>
        </select>
      </div>

      <div className='FilterActivity'>
      <select name="activity" onChange={handleCountryByActivity}>
        <option value="">All</option>
        {activities?.map(el => (
          <option key={el.name} value={el.name}>
            {el.name}
          </option>
        ))}
      </select>
      </div>
    </div>
  )
}
