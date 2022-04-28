import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/DashboardConstants";
import DashboardServices from "../services/DashboardServices";

export function* ViewTotalIncidentsSaga(payload) {
    try {
        const response = yield call(DashboardServices.ViewTotalincidents, payload.dashboarddata);
        yield put({ type: constant.TOTAL_INCIDENTS_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.TOTAL_INCIDENTS_ERROR, error })
    }
}

export function* ViewIncidentVolumeSaga(payload) {
    try {
        const response = yield call(DashboardServices.ViewIncidentVolumes, payload.dashboarddata);
        yield put({ type: constant.INCIDENT_VOLUMES_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.INCIDENT_VOLUMES_ERROR, error })
    }
}

export function* ViewActivecasesbyChannel(payload) {
    try {
        const response = yield call(DashboardServices.ViewActivecasesbyChannel, payload.dashboarddata);
        yield put({ type: constant.ACTIVECASE_CHANNEL_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.ACTIVECASE_CHANNEL_ERROR, error })
    }
}

export default function* DashboardSaga() {
    yield takeLatest(constant.TOTAL_INCIDENTS, ViewTotalIncidentsSaga);
    yield takeLatest(constant.INCIDENT_VOLUMES, ViewIncidentVolumeSaga);
    yield takeLatest(constant.ACTIVECASE_CHANNEL, ViewActivecasesbyChannel);
}