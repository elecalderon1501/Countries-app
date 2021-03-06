import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import FilterOrder from '../FilterOrder/FilterOrder'
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import '../Home/Home.css'
import { getAllCountries, getAllActivities } from '../../redux/actions/index'

export default function Home() {
  const dispatch = useDispatch()
  const filters = useSelector(state => state.filters)

  //pagination--------------------------
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPage] = useState(10)

  let indexOfLastCountry = currentPage * countriesPage
  let indexOfFirstCountry = indexOfLastCountry - countriesPage

  let currentCountries = filters?.slice(indexOfFirstCountry, indexOfLastCountry)
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

  return (
    <>
      <Nav />
      <SearchBar />
      <FilterOrder />
      <br />
      <div className="RefreshButton">
        <button onClick={e => handleClick(e)}>Refresh </button>
        {console.log(currentCountries)}
      </div>
      <br />

      <div>
        <ul className="Pagination">{renderPages}</ul>
      </div>

      <div className="CardsBackground">
        
        <div>
          
          {filters.length>0? currentCountries?.map(c => {
            return (
              <Card
                key={c.id}
                className="CardBackground"
                id={c.id}
                name={c.name}
                flags={c.flags}
                continent={c.continent}
              />
            )
          }) :  <h1> Country not found </h1>}
        </div>
      </div>
    </>
  )
}
