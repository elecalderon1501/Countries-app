import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCountries, postActivity } from '../../redux/actions/index'
import './CreateActivity.css'

function validate(activity) {
  let error = {}
  if (!activity.name) {
    error.name = 'Name is required'
  }
  if (!activity.difficulty) {
    error.difficulty = 'Difficulty is required'
  }
  if (!activity.duration) {
    error.duration = 'Duration is required'
  }
  if (!activity.season) {
    error.season = 'Season is required'
  }
  if (!activity.countries) {
    error.countries = 'Country is required'
  }
  if (/^([0-9])*$/.test(activity.name)) {
    error.name = 'Error Name'
  }
  return error
}

//----------------------------------------------------------

export default function CreateActivity() {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  const [activity, setActivity] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: [],
  })
  const [error, setError] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: [],
  })

  //----------------------------------------------------------
  function handleChange(e) {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    })
    setError(
      validate({
        ...activity,
        [e.target.name]: e.target.value,
      })
    )
    console.log(activity)
  }

  function handleSelect(e) {
    setActivity({
      ...activity,
      countries: [...activity.countries, e.target.value],
      // me guarda en un arreglo todo lo que vaya seleccionando de select
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError(validate(error))
    if (Object.keys(error).length !== 0) {
      alert('Debe llenar todos los campos')
    } else {
      dispatch(postActivity(activity))

      setActivity({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
      })
      alert('Activity Created Succesfuly')

      setError(
        validate({
          ...activity,
          [e.target.name]: e.target.value,
        })
      )
    }
  }

  function handleDelete(e) {
    setActivity({
      ...activity,
      countries: activity.countries.filter(act => act !== e),
    })
  }

  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  //------------------------------------------------------------------------
  return (
    <div className="backGroundForm">
      <div className="ButtonContainer">
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <button>Back to Home</button>{' '}
        </Link>
      </div>

      <form className="CardForm" onSubmit={e => handleSubmit(e)}>
        <h2>ADD A TOURIST ACTIVITY</h2>

        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            value={activity.name}
            name="name"
            onChange={e => handleChange(e)}
            required
          />
          {error.name && <p className="error">{error.name}</p>}
        </div>

        <br />

        <div>
          <label htmlFor="difficulty">Difficulty:</label>
          <br />
          <select type="text" name="difficulty" onChange={e => handleChange(e)}>
            <option value="">Difficulty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {error.difficulty && <p className="error">{error.difficulty}</p>}
        </div>

        <div>
          <label htmlFor="duration">Duration (minutes): </label>
          <br />
          <input
            onChange={e => handleChange(e)}
            value={activity.duration}
            id="duration"
            type="number"
            name="duration"
            placeholder="The activity duration"
          ></input>

          {error.duration && <p className="error">{error.season}</p>}
          <br />
        </div>

        <div>
          <label htmlFor="season">Season: </label>
          <br />
          <select type="text" name="season" onChange={e => handleChange(e)}>
            <option value="">Choose Your Activity Season</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>

          {error.season && <p className="error">{error.season}</p>}
          <br />
        </div>

        <div>
          <label>Countries: </label>
          <br />
          <select onChange={e => handleSelect(e)}>
            {countries.map(c => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          {error.countries && <p>{error.countries}</p>}
          <br></br>
        </div>

        <button className="submitButton" onClick={handleSubmit}>
          Add Activity
        </button>
      </form>
      <div className="valuesSelected">
        {activity.countries.map(el => (
          <div className="oneValueSelected">
            <p>
              {el}
              <button
                className="valuesSelectedButton"
                onClick={() => handleDelete(el)}
              >
                x
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
