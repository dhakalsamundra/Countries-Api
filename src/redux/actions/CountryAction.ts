import { Dispatch } from 'redux'
import { FETCH_COUNTRIES, CountryActions, Country } from '../../types'



export function fetchedCountry(fetchedCountry: Country[]): CountryActions {
  return {
    type: FETCH_COUNTRIES,
    payload: {
      fetchedCountries: fetchedCountry,
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
