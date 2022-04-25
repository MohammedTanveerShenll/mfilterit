import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/DashboardConstants";
import DashboardService from "../services/DashboardServices";

export function* viewTotalIncidentsSaga(payload) {
    try {
        const response = yield call(DashboardService.ViewTotalincidents, payload);
        yield put({ type: constant.TOTAL_INCIDENTS_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.TOTAL_INCIDENTS_ERROR, error })
    }
}

export default function* DashboardSaga() {
    yield takeLatest(constant.TOTAL_INCIDENTS, viewTotalIncidentsSaga);
}
