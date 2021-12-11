import axios from 'axios'
import {
  GET_ALL_COUNTRIES,
  SEARCH_COUNTRIES,
  GET_DETAILS,
  CREATE_ACTIVITY,
  GET_ALL_ACTIVITIES,
  // APPLY_FILTERS,
} from './actionTypes'

export function getAllCountries() {
  return async function (dispatch) {
    let allCountries = await axios.get('http://localhost:3001/countries')
    return dispatch({
      type: GET_ALL_COUNTRIES,
      payload: allCountries.data,
    })
  }
}

export function searchCountries(name) {
  return async function (dispatch) {
    try {
      let nameCountry = await axios.get(
        'http://localhost:3001/countries?name=' + name
      )
      return dispatch({
        type: SEARCH_COUNTRIES,
        payload: nameCountry.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getDetails(id) {
  return async function (dispatch) {
    try {
      let idCountry = await axios.get('http://localhost:3001/countries/' + id)
      return dispatch({
        type: GET_DETAILS,
        payload: idCountry.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function createActivity(obj) {
  return async function (dispatch) {
    try {
      
    } catch (error) {
      
    }
  }
}