import {
  GET_ALL_COUNTRIES,
  COUNTRY_DETAIL,
  COUNTRY_BY_NAME,
  COUNTRY_BY_CONTINENT,
  COUNTRY_BY_ACTIVITY,
  FILTER_POPU,
  GET_ALL_ACTIVITIES,
  POST_ACTIVITY,
  ORDER_BY_NAME,
} from '../actions/actionTypes'

const initialState = {
  activities: [],
  countries: [],
  filters: [],
  detail: [],
}

function rootReducer(state = initialState, action) {
  //action contiene {type, payload}
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filters: action.payload,
      }

    case COUNTRY_DETAIL:
      return {
        ...state,
        countries: action.payload,
        detail: action.payload,
      }

    case COUNTRY_BY_NAME:
      return {
        ...state,
        filters: action.payload,
      }

    case COUNTRY_BY_CONTINENT:
      // const countries = state.countries
      const filteredContinent =
        action.payload === 'All'
          ? state.countries
          : state.countries.filter(c => c.continent === action.payload)

      return {
        ...state,
        filters: filteredContinent,
      }

    case FILTER_POPU:
      if (action.payload === 'ASC')
        return {
          ...state,
          filters: [...state.filters].sort((a, b) =>
            a.population > b.population ? 1 : -1
          ),
        }
      return {
        ...state,
        filters: [...state.filters].sort((a, b) =>
          a.population > b.population ? -1 : 1
        ),
      }

    case ORDER_BY_NAME: {
      if (action.payload === 'A-Z')
        return {
          ...state,
          filters: [...state.filters].sort((a, b) =>
            a.name > b.name ? 1 : -1
          ),
        }
      return {
        ...state,
        filters: [...state.filters].sort((a, b) => (a.name > b.name ? -1 : 1)),
      }
    }

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      }

    case POST_ACTIVITY:
      return {
        ...state,
      }
    case COUNTRY_BY_ACTIVITY:
      const activitiesFilter = action.payload === 'All' ? state.countries : state.countries.filter((el)=> el.activities && el.activities.map((e)=> e.name).includes(action.payload))
      return {
        ...state,
        filters: activitiesFilter
        
      }

    default:
      return state
  }
}

export default rootReducer


//countries = filters
//allCountries = countries