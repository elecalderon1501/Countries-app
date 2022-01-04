import React, { useState, useEffect } from 'react'
import './FilterOrder.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllCountries,
  getAllActivities,
  countryByContinent,
  countryByActivity,
  filterPopu,
  order_by_name,
} from '../../redux/actions/index'

export default function FilterOrder() {
  const dispatch = useDispatch()

  const activities = useSelector(state => state.activities)
  //let actCountries = activities?.map(el => el.name)
//const countries = useSelector((state)=>state.countries)
  const [, setOrden] = useState('')

  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getAllActivities())
  }, [dispatch])

  function handleCountryByContinent(e) {
    e.preventDefault()
    dispatch(countryByContinent(e.target.value))
    setOrden(e.target.value)
  }

  function handleCountryByActivity(e) {
    e.preventDefault()
    dispatch(countryByActivity(e.target.value))
    setOrden(e.target.value)
  }

  function handleFilterPopu(e) {
    e.preventDefault()
    dispatch(filterPopu(e.target.value))
    setOrden(e.target.value)
  }

  function handleFilterName(e) {
    e.preventDefault()
    dispatch(order_by_name(e.target.value))
    setOrden(e.target.value)
  }

  return (
    <div className="BackGround">
      <div className="FilterContinent">
        <select onChange={e => handleCountryByContinent(e)}>
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
        <select
          onChange={e => {
            handleFilterPopu(e)
          }}
        >
          <option value="">Order by Popultation</option>
          <option value="ASC">Ascendant Population</option>
          <option value="DESC">Descendant Population</option>
        </select>
      </div>

      <div className="OrderName">
        <select
          onChange={e => {
            handleFilterName(e)
          }}
        >
          <option value="">Order by Name</option>
          <option value="A-Z">Countries A to Z</option>
          <option value="Z-A">Countries Z to A</option>
        </select>
      </div>

      <div className="FilterActivity">
        <select onChange={e => handleCountryByActivity(e)}>
          <option>Filter By Activity</option>
            {activities && activities.map((el) => (
              <option value = {el.name}>{el.name}</option>
            ))}

          {/* {actCountries?.map(el => (
            <option key={el.name} value={el.name}>
              {el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()}
            </option>
          ))} */}
        </select>
      </div>
    </div>
  )
}
//allCountries = state.countries = countries
//allActivities = state.activities = activities