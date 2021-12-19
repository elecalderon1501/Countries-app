import React, { useState } from 'react';
import Card from './'
import Paginado from '../Paginado';
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { filterByPopulation, filterByRegion, getAllCountries, orderByName } from '../../redux/actions';

export default function Home () {

   const dispatch = useDispatch();

   const allCountries = useSelector ((state) => state.countries);
   const activities = useSelector ((state) => state.activities);


   const[orden, setOrden] = useState('')

   const[currentPage, setCurrentPage] = useState(1) //la pagina actual sera 1
   const [countriesPerPage, setCountriesPerPage] = useState(10)
   //10personajes por pag
   const indexOfLastCountry = currentPage * countriesPerPage
   // indice del ultimo elemento
   const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
   //indice del primer personaje
   const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

   const paginado = (pageNumber) => {
      setCurrentPage(pageNumber)
   }

   useEffect(() => {
      dispatch(getAllCountries()); //=mapDispatchtoprops
   }, [dispatch])

   function handleClick(e) {
      e.preventDefault();
      dispatch(getAllCountries)
   }

   function handleSort(e) {
      e.preventDefault();
      dispatch(orderByName(e.target.value))
      setCurrentPage(1);
      setOrden(`Ordered ${e.target.value}`)
   }

   function handleFilterContinent(e){
      dispatch(filterByRegion(e.target.value))
   }

   function handleFilterPopulation(e){
      dispatch(filterByPopulation(e.target.value))
   }

   return (
      <div>
         <Link to = '/countries'>Countries</Link>
         <button onClick = { e => {handleClick(e)}}> Reset Countries</button>
         <div>
            {/* order by name */}
            <select onChange = {e => handleSort(e)}>
               <option value = 'asc'>Ascending</option>
               <option value = 'desc'>Descending</option>
            </select>

            {/* order by population */}
            <select onChange = {e => handleFilterPopulation(e)}>
               <option value = 'asc'>Ascending</option>
               <option value = 'desc'>Descending</option>
            </select>


            <select onChange = {e => handleFilterContinent(e)}>
            <option value = 'All'>All</option>
            <option value = 'North America'>North America</option>
            <option value = 'Asia'>Asia</option>
            <option value = 'Africa'>Africa</option>
            <option value = 'Europe'>Europe</option>
            <option value = 'Oceania'>Oceania</option>
            <option value = 'Antarctica'>Antarctica</option>
            <option value = 'South America'>South America</option>
            </select>

            <Paginado countriesPerPage = {countriesPerPage}
            allCountries = {allCountries.length}
            paginado = {paginado}/>

         <Nav/>
         {currentCountries?.map (el =>{ 
            return(
               <div>
                  <Link to = {'/home/' + el.id}>
                     <Card name = {el.name} img = {el.flags} continent = {el.region} key = {el.id} />
                  </Link>
                  </div>
            )
         })}
         </div>
        
      </div>
   )
   





}