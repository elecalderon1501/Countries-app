import {
  GET_ALL_COUNTRIES,
  SEARCH_COUNTRIES,
  GET_DETAILS,
  GET_ALL_ACTIVITIES,
  FILTER_BY_REGION,
  ORDER_BY_NAME,
  FILTER_POPULATION
} from '../actions/actionTypes'

const initialState = {
  countries: [],
  allCountries: [],
  allActivities: [],
  detail: []
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        countries: payload
      }
    case SEARCH_COUNTRIES:
      return {
        ...state,
        countries: payload,
      }
    case GET_DETAILS:
      return {
        ...state,
        countryDetails: payload,
      }
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        allActivities: payload,
      }

    case FILTER_BY_REGION:
      const allCountries = state.allCountries
      const statusFiltered = 
      payload === 'All'
      ? allCountries
      :allCountries.filter(el => el.continent === payload)
      return {
        ...state,
        countries: statusFiltered,
      }
    case FILTER_POPULATION:
      let sorted;
      if (payload === 'asc') { //num
        sorted = state.filters.sort((a, b) => {
            return a.population - b.population;
        })
    }
    if (payload === 'desc') {
        sorted = state.filters.sort((a, b) => {
            return b.population - a.population;
        })
    }
    return {
        ...state,
        filters: sorted
    };

    case ORDER_BY_NAME:
      let sortedArr =
        payload === 'asc'
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1
              }
              if (b.name > a.name) {
                return -1
              }
              return 0
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1
              }
              return 0
            })
      return {
        ...state,
        countries: sortedArr,
      }

    default:
      return state
  }
}

export default reducer
