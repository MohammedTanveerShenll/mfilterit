import { all } from 'redux-saga/effects'

import { fetchReportWatcher } from './report'
export default function * rootSaga () {
  yield all([

    fetchReportWatcher(),
    ...creatCaseSagas
  ])
}
