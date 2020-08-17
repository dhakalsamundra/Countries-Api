import { all } from 'redux-saga/effects'

import CountrySaga from './country'

export default function* rootSaga() {
  yield all([...CountrySaga])
}
