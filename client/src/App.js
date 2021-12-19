import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Home from './views/Home'
import { CreateActivity } from './views/CreateActivity'
import { CountryDetail } from './views/CountryDetail'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCountries } from './redux/actions'
import { Nav } from './components'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCountries())
    // dispatch(getAllActivities())
  }, [dispatch])

  return (
    <>
    <Nav/>
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/activity" element={<CreateActivity />} />
          <Route path="/home/:id" element={<CountryDetail />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
