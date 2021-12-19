import axios from 'axios'
import {
  GET_ALL_COUNTRIES,
  SEARCH_COUNTRIES,
  GET_DETAILS,
  CREATE_ACTIVITY,
  GET_ALL_ACTIVITIES,
  // FILTER_BY_ACTIVITIES,
  FILTER_BY_REGION,
  FILTER_BY_POPULATION,
  ORDER_BY_NAME,
} from './actionTypes'

export function getAllCountries() {
  return async function (dispatch) {
    try {
      let allCountries = await axios.get('http://localhost:3001/countries')
      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: allCountries.data,
      })
    } catch (error) {
      console.log(error)
    }
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
    let activityCreated = await axios.post(
      'http://localhost:3001/activity',
      obj
    )
    return dispatch({
      type: CREATE_ACTIVITY,
      payload: activityCreated.data,
    })
  }
}

export function getAllActivities() {
  return async function (dispatch) {
    try {
      const allActivities = await axios.get('http://localhost:3001/activity')
      return dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: allActivities.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function filterByRegion(payload) {
  console.log(payload)
  return {
    type: FILTER_BY_REGION,
    payload,
  }
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  }
}

export function filterByPopulation(payload) {
  return {
    type: FILTER_BY_POPULATION,
    payload
  }
}
