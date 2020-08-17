export default {
  fetchCountries: async () => {
    console.log('this is from fetch countries services')
    const res = await fetch('https://restcountries.eu/rest/v2/region/europe')
    const countries = await res.json()
    return countries
  },
}
