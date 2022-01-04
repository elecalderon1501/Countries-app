import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCountries, postActivity } from '../../redux/actions/index'
import './CreateActivity.css'

function validate(activity) {
  let error = {}
  !activity.name && (error.name = 'Name is required')
  !activity.difficulty && (error.difficulty = 'Difficulty is required')
  !activity.duration && (error.duration = 'Duration is required')
  !activity.season && (error.season = 'Season is required')
  !activity.countries && (error.countries = 'Country is required')
  if (/^([0-9])*$/.test(activity.name)) {
    error.name = 'Numbers are not allowed'
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

  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  //----------------------------------------------------------
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(postActivity(activity))
    setError(
      validate({
        ...activity,
        [e.target.name]: e.target.value,
      })
    )

    setActivity({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: [],
    })
    alert('Activity Created Succesfuly')
  }

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
  }

  function handleSelect(e) {
    setActivity({
      ...activity,
      countries: [...activity.countries, e.target.value],
      // me guarda en un arreglo todo lo que vaya seleccionando de select
    })
  }

  function handleDelete(e) {
    setActivity({
      ...activity,
      countries: activity.countries.filter(act => act !== e),
    })
  }
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
          />
          {error.name && <p className="error">{error.name}</p>}
        </div>
        {/* Valor htmlFor conjuntos de propiedades o devoluciones lable para la propiedad.
para el atributo especifica la etiqueta a la que desea enlazar un elemento de formulario. */}
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
            onChange={(e)=>handleChange(e)}
            value={activity.duration}
            id="duration"
            type="number"
            name="duration"
            placeholder="The activity duration"
            required="required"
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
          </select>{' '}
          {error.season && <p className="error">{error.season}</p>}
          <br />
        </div>

        <div>
          <label>Countries: </label>
          <br />
          <select onChange={e => handleSelect(e)}>
            {countries.map(c => (
              <option key={c.name} value={c.name}> {c.name} </option>
            ))}
          </select>{' '}
          {error.countries && <p>{error.countries}</p>}
          <br></br>
        </div>

        <button className="submitButton" onClick={handleSubmit}>
          Add Activity
        </button>

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
      </form>
    </div>
  )
}
