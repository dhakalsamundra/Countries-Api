import {
  ListOfCountriesCart,
  CountryActions,
  FETCH_COUNTRIES,
  ADD_COUNTRY,
} from '../../types'

export default function country(
  state: ListOfCountriesCart = {
    list: [],
    filteredList: [],
    inCart: [],
  },
  action: CountryActions
): ListOfCountriesCart {
  switch (action.type) {
  case FETCH_COUNTRIES: {
    const { fetchedCountries } = action.payload
    return {
      ...state,
      //making a new array of country after adding and using spread.
      list: [...fetchedCountries],
      filteredList: [...fetchedCountries],
    }
  }
  case ADD_COUNTRY: {
    const { addCountry } = action.payload
    return {
      ...state,
      inCart: [...state.inCart, addCountry],
    }
  }


  default:
    return state
  }
}
