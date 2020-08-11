import { combineReducers } from 'redux'

import countries from './country'

const createRootReducer = () =>
  combineReducers({
    countries,
  })

export default createRootReducer
