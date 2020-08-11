import React from 'react'

import { AppState, Country } from '../types'
import NavBar from '../Components/NavBar/navBar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const CountryDetails = () => {
  const { name } = useParams()
  const countries = useSelector((state: AppState) => state.countries.list)

  const country: Country | any = countries.find(
    (country) => country.name === name
  )
  return (
    <div>
      <NavBar />
      <section>
        <img src={country.flag} alt="flag of that country" width="250px" />
        <h1>{country.name}</h1>
        <p>
          Population of this country is : {country.population} and is situated
          in <br />
          {country.region} and <br />
          {country.subregion}
        </p>
      </section>
    </div>
  )
}
