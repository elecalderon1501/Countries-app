import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Card from '../Card/Card'
import Nav from '../Nav/Nav'
import '../Home/Home.css'
import {
  getAllCountries,
  getAllActivities,
  countryByContinent,
  countryByActivity,
  filterPopuAlph,
} from '../../redux/actions/index'

export default function Home() {
  const dispatch = useDispatch()
  const filters = useSelector(state => state.filters)

  const [, setSort] = useState('')

  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getAllActivities())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault()
    dispatch(getAllCountries())
  }
  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPage] = useState(13)

  let indexOfLastCountry = currentPage * countriesPage //1*9
  let indexOfFirstCountry = indexOfLastCountry - countriesPage //9-9

  let currentCountries = filters?.slice(indexOfFirstCountry, indexOfLastCountry) //(0,9)
  let pages = []

  const numOfPages = Math.ceil(filters.length / countriesPage)

  for (let i = 1; i <= numOfPages; i++) {
    pages.push(i)
  }

  function pagination(e, page) {
    e.preventDefault()
    setCurrentPage(page)
  }

  const renderPages = pages.map(page => (
    <li key={page}>
      <div>
        <button onClick={e => pagination(e, page)}>{page}</button>
      </div>
    </li>
  ))

  //-------------------filters------------------------------
  function handleCountryByContinent(e) {
    dispatch(countryByContinent(e.target.value))
    setSort(e.target.value)
  }
  //--------------------------------------------------------
  function handleCountryByActivity(e) {
    e.preventDefault()
    dispatch(countryByActivity(e.target.value))
    setSort(e.target.value)
  }
  //--------------------------------------------------------
  
  function handleFilterPopuAlph(e) {
    e.preventDefault()
    dispatch(filterPopuAlph(e.target.value))
    setSort(e.target.value)
  }

  //--------------------------------------------------------
  /*Home Page*/
  //--------------------------------------------------------
  return (
    <>
      <div className="BackGround">
        <Nav />
        <br></br>
        <SearchBar />
        <br></br>
        <div className="FilterContainer">
          <select onChange={handleCountryByContinent}>
            <option value="All">Filters By Continents</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>
          </select>
          
          <select onChange={handleCountryByActivity}>
            <option value="All">Filters By Activities</option>
            <option value="Surf">Surf</option>
            <option value="Safari">Safari</option>
            <option value="Sky diving">Sky diving</option>
            <option value="Diving">Diving</option>
            <option value="Montain Climb">Montain-Climb</option>
            <option value="Camping">Camping</option>
          </select>

          <select onChange={handleFilterPopuAlph}>
            <option value="All">Sorts</option>
            <option value="A-Z">Countries A to Z</option>
            <option value="Z-A">Countries Z to A</option>
            <option value="ASC">Ascendant Population</option>
            <option value="DESC">Descendant Population</option>
          </select>
        </div>

        <div className="RefreshButton">
          <button onClick={e => handleClick(e)}>Refresh Country</button>
          {console.log(currentCountries)}
        </div>
        <ul className="Pagination">{renderPages}</ul>
      </div>

      {currentCountries?.map((c) => {
        return (
          <div className='CardBackground'>
            <Card
              id={c.id}
              name={c.name}
              flags={c.flags}
              continent={c.continent}
            />
          </div>
        );
      })}
      {/* <div className="CardsBackground">
        <Cards countries={currentCountries} />
      </div> */}
    </>
  )
}
