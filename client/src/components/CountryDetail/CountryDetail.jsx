import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import React, { useEffect } from 'react'
import { countryDetail } from '../../redux/actions/index'
import './CountryDetail.css'
import { Link } from 'react-router-dom'

export default function CountryDetail() {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(countryDetail(id))
  }, [dispatch, id])
  const detail = useSelector(state => state.detail)

  return (
    <>
    <div>
    <Link className="Link" to="/home">
            <button>Home Page</button>
          </Link>
    </div>
      {detail ? (
        <div className="BackGround">
          <div className="Card">
            <div className="ImageContainer">
              <img className="Image" src={detail.flags} alt="image_flag" />
            </div>

            <div className="DetailContainer">
              <h2 padding="0px">
                {detail.name}({detail.id})
              </h2>
              <h4 padding="0px">Continent: {detail.continent} </h4>
              <h4 padding="0px">
                {' '}
                Subregion: {detail.subregion ? ' ' + detail.subregion : '---'}
              </h4>
              <h4 padding="0px">Capital: {detail.capital}</h4>
              <h4 padding="0px">Population: {detail.population}</h4>
              <h4 padding="0px">Area: {detail.area} km²</h4>
              <h4 padding="0px">Activities: </h4>

              <div className="ActContainer">
                {detail.Activities &&
                  detail.Activities.map(a => (
                    <p key={a.id}>
                      <li>Name: {a.name}</li>
                      <li>Season: {a.season} </li>
                      <li>Duration: {a.duration} </li>
                      <li>Difficulty: {a.difficulty} </li>
                    </p>
                  ))}
              </div>
            </div>
          </div>
          
        </div>
      ) : (
        <span>Country Not Found</span>
      )}
    </>
    
  )
}
