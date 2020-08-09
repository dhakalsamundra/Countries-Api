// Action types
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const SORT_COUNTRIES = 'SORT_COUNTRIES'

//countries
export type Country = {
  id?: string
  country: string
  name: string
  region: string
  flag: string
  population: string
  languages: Language[]
}
export type Language = {
  name: string
}
export type CountryDetailsProps = {
  country: Country
}
export type Search = {
  search: Country[]
}

export type FetchCountriesAction = {
  type: typeof FETCH_COUNTRIES
  payload: {
    fetchedCountries: Country[]
  }
}

export type SortCountries = {
  type: typeof SORT_COUNTRIES
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    addCountry: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    removeCountry: Country
  }
}
export type SearchCountriesAction = {
  type: typeof SEARCH_COUNTRIES
  payload: {
    searchTerm: string
  }
}

// Use this union in reducer
export type CountryActions =
  | AddCountryAction
  | RemoveCountryAction
  | FetchCountriesAction
  | SearchCountriesAction
  | SortCountries

export type ListOfCountriesCart = {
  list: Country[]
  filteredList: Country[]
  inCart: Country[]
}
export type AppState = {
  countries: ListOfCountriesCart
}
