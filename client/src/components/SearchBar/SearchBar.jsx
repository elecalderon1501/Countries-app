import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { countryByName } from '../../redux/actions/index'
import '../SearchBar/SearchBar.css'

export default function SearchBar() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  function handleChange(e) {
    e.preventDefault()
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(countryByName(name))
    setName('')
  }

  return (
    <>
      <div className="Container">
        <input
          onChange={e => handleChange(e)}
          placeholder="Name..."
          value={name}
          type="text"
        />
        <button className='searchButton'   onClick={e => handleSubmit(e)} type="submit">
          Search
        </button>
      </div>
    </>
  )
}
