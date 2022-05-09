import { put, takeLatest, all } from 'redux-saga/effects'
import { SESSION } from '../../utils/constants'
import { setLocalStorage } from '../../utils/helper'
import axiosInstance from '../../services'
import {
ReportActions,
ReportActionsTypes
} from '../actions'
import serviceList from '../../services/serviceList'

function* fetchReport(actions) {
  const { params } = actions;
  try {
    const json = yield axiosInstance.get(serviceList.report_list, {
      params,
    });
    if (json.status === 200) {
      yield put(ReportActions.saveReportResponse(json.data));
    } 
  } catch (error) {
    const data = { status: "error", message: API_MESSAGES.SOMETHING_WRONG };
    yield put({ type: ReportActionsTypes.ERROR, data });
  }
}

export function * fetchReportWatcher () {
  yield all([yield takeLatest(ReportActionsTypes.REPORT, fetchReport)])
}
