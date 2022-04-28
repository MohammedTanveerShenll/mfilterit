import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/DashboardConstants";
import DashboardServices from "../services/DashboardServices";

export function* ViewTotalIncidentsSaga(payload) {
    try {
        const response = yield call(DashboardServices.ViewTotalincidents, payload.dashboarddata);
        yield put({ type: constant.TOTAL_INCIDENTS_SUCCESS, response })
    } catch (error) {
        console.log(error);
        yield put({ type: constant.TOTAL_INCIDENTS_ERROR, error })
    }
}

export default function* DashboardSaga() {
    yield takeLatest(constant.TOTAL_INCIDENTS, ViewTotalIncidentsSaga);
}