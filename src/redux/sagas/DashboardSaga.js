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

export function* ViewSubChannel(payload) {
    try {
        const response = yield call(DashboardServices.ViewSubchannel, payload.dashboarddata);
        yield put({ type: constant.SUBCHANNEL_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.SUBCHANNEL_ERROR, error })
    }
}

export function* ViewToptenLocationSage(payload) {
    try {
        const response = yield call(DashboardServices.ViewToptenlocation, payload.dashboarddata);
        yield put({ type: constant.TOPTEN_LOCATION_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.TOPTEN_LOCATION_ERROR, error })
    }
}

export function* ViewCategorylevelcountSage(payload) {
    try {
        const response = yield call(DashboardServices.ViewCategorylevelcount, payload.dashboarddata);
        yield put({ type: constant.CATEGORY_LEVEL_COUNT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.CATEGORY_LEVEL_COUNT_ERROR, error })
    }
}

export function* ViewPublisherlevelcountSage(payload) {
    try {
        const response = yield call(DashboardServices.ViewPublisherlevelcount, payload.dashboarddata);
        yield put({ type: constant.PUBLISHER_LEVEL_COUNT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.PUBLISHER_LEVEL_COUNT_ERROR, error })
    }
}

export default function* DashboardSaga() {
    yield takeLatest(constant.TOTAL_INCIDENTS, ViewTotalIncidentsSaga);
    yield takeLatest(constant.INCIDENT_VOLUMES, ViewIncidentVolumeSaga);
    yield takeLatest(constant.ACTIVECASE_CHANNEL, ViewActivecasesbyChannel);
    yield takeLatest(constant.SUBCHANNEL_INIT, ViewSubChannel);
    yield takeLatest(constant.TOPTEN_LOCATION_INIT, ViewToptenLocationSage);
    yield takeLatest(constant.CATEGORY_LEVEL_COUNT, ViewCategorylevelcountSage);
    yield takeLatest(constant.PUBLISHER_LEVEL_COUNT, ViewPublisherlevelcountSage);
}