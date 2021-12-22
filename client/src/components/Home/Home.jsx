import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import Cards from '../Cards/Cards'
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

  const activities = useSelector((state) => state.activities);
  

  const [, setSort] = useState('')

  //pagination--------------------------
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPage] = useState(10)

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
  //--------------------------------------------
  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getAllActivities())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault()
    dispatch(getAllCountries())
  }

  //-------------------filters------------------------------
  function handleCountryByContinent(e) {
    dispatch(countryByContinent(e.target.value))
    setSort(e.target.value)
  }
  //--------------------------------------------------------
  function handleCountryByActivity(e) {
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

      <div className="BackGround">
        <div className="FilterContainer">
          <select onChange={handleCountryByContinent}>
            <option value="All">Filters By Continents</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>
            <option value="Antarctica">Antarctica</option>
          </select>

          
          <select onChange={handleFilterPopuAlph}>
            <option value="All">Sorts</option>
            <option value="A-Z">Countries A to Z</option>
            <option value="Z-A">Countries Z to A</option>
            <option value="ASC">Ascendant Population</option>
            <option value="DESC">Descendant Population</option>
          </select>
        
        <select name='activity' onChange={handleCountryByActivity}>
          <option value = ''>All</option>
          {
            activities?.map((el) =>
              <option key = {el.name} value = {el.name}>{el.name}</option>)
          }

        </select>
        </div>


        <div className="RefreshButton">
          <button onClick={e => handleClick(e)}>Refresh Country</button>
          {console.log(currentCountries)}
        </div>
        <ul className="Pagination">{renderPages}</ul>
      
        <div className="CardsBackground">
        <Cards countries={currentCountries} />
      </div>
      <SearchBar />

      
      </div>

      {/* <div>
        {currentCountries?.map(c => {
          return (
            <fragment>
              <Card
                className="CardBackground"
                id={c.id}
                name={c.name}
                flags={c.flags}
                continent={c.continent}
              />
            </fragment>
          )
        })}
      </div> */}
      
    </>
  )
}
