import './App.css'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
/*---------------components--------------*/
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import CountryDetail from './components/CountryDetail/CountryDetail'
import CreateActivity from './components/CreateActivity/CreateActivity'
/*--------------actions-------------*/
import { getAllCountries, getAllActivities } from './redux/actions/index'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getAllActivities())
  }, [dispatch])
  /*--------------routes-----------*/
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/countries/:id" element={<CountryDetail />} />
        <Route path="/activity" element={<CreateActivity />} />
      </Routes>
    </Router>
  )
}

export default App
