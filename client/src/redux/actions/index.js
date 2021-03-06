import {
  GET_ALL_COUNTRIES,
  COUNTRY_DETAIL,
  COUNTRY_BY_NAME,
  COUNTRY_BY_CONTINENT,
  COUNTRY_BY_ACTIVITY,
  FILTER_POPU,
  GET_ALL_ACTIVITIES,
  POST_ACTIVITY,
  ORDER_BY_NAME
} from "./actionTypes";
import axios from 'axios'


export function getAllCountries() {
  return async function (dispatch) {
      try {
          const countries = await axios.get('http://localhost:3001/countries');
          return dispatch({
              type: GET_ALL_COUNTRIES,
              payload: countries.data
          });
      } catch (err) {
          console.log(err)
      }
  }
};

export function countryByName(name) {
  return async function (dispatch) {
      try {
          const country = await axios.get(`http://localhost:3001/countries?name=${name}`)
             return dispatch({
                  type: COUNTRY_BY_NAME,
                  payload: country.data
              })
      } catch (err) {
          console.log(err)
      }
  }
};

export function countryDetail(id) {
  return async function (dispatch) {
      try {
          const details = await axios.get(`http://localhost:3001/countries/${id}`)
          return dispatch({
              type: COUNTRY_DETAIL,
              payload: details.data
          })
      } catch (err) {
          alert('Country Not Found')
      }
  }
};

export function postActivity(payload) {
  return async function (dispatch) {
      const newActivity = await axios.post('http://localhost:3001/activity', payload)
      return newActivity;       

  }
}

export function getAllActivities() {
  return async function (dispatch) {
      try {
          const activity = await axios.get('http://localhost:3001/activity')
          return dispatch({
              type: GET_ALL_ACTIVITIES,
              payload: activity.data
          })
      } catch (err) {
          console.log(err)
      }
  }
};


export function countryByContinent(payload) {
    console.log(payload)
  return {
      type: COUNTRY_BY_CONTINENT,
      payload
  }
};

export function countryByActivity(payload) {
  return {
      type: COUNTRY_BY_ACTIVITY,
      payload
  }
};



export function filterPopu(payload) {
  return {
      type: FILTER_POPU,
      payload
  }
};

export function order_by_name(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}