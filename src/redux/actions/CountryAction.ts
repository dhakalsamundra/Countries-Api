import { Dispatch } from 'redux'

import {
  ADD_COUNTRY,
  Country,
  FETCH_COUNTRIES,
  CountryActions,
  REMOVE_COUNTRY,

} from '../../types'

export function addCountry(addCountry: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      addCountry,
    },
  }
}

export function fetchedCountry(fetchedCountry: Country[]): CountryActions {
  return {
    type: FETCH_COUNTRIES,
    payload: {
      fetchedCountries: fetchedCountry,
    },
  }
}

export function SortCountries(): CountryActions {
  return {
    type: SORT_COUNTRIES,
  }
}



export function removeCountry(removeCountry: Country): CountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      removeCountry,
    },
  }
}


// An Example of Async action processed by redux-thunk middleware
export function fetchCountry() {
  return async (dispatch: Dispatch) => {
    const resp = await fetch('https://restcountries.eu/rest/v2/all')
    const countriesData = await resp.json()
    dispatch(fetchedCountry(countriesData))
  }
}
