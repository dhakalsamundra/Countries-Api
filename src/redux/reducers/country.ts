import {
  ListOfCountriesCart,
  CountryActions,
  FETCH_COUNTRIES,
  ADD_COUNTRY,
  SEARCH_COUNTRIES,
  SORT_COUNTRIES,
  REMOVE_COUNTRY,
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

  case REMOVE_COUNTRY: {
    const { removeCountry } = action.payload
    const index = state.inCart.findIndex((p) => p.name === removeCountry.name)
    if (index >= 0) {
      //removing the one country in that index
      state.inCart.splice(index, 1)
      return { ...state, inCart: [...state.inCart] }
    }
    return state
  }

  case SORT_COUNTRIES: {
    const descendingOrder = state.filteredList.reverse()
    return {
      ...state,
      filteredList: [...descendingOrder],
    }
  }
  
  case SEARCH_COUNTRIES: {
    const { searchTerm } = action.payload
    const searchedData = state.list.filter((element: { name: string }) =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return {
      ...state,
      filteredList: [...searchedData],
    }
  }

  default:
    return state
  }
}
