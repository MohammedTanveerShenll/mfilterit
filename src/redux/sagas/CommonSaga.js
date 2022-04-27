import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/CommonConstants";
import CommonServices from "../services/CommonService";

export function* ViewPackagenameSaga() {
    try {
        const response = yield call(CommonServices.ViewPackagename);
        yield put({ type: constant.PACKAGENAME_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.PACKAGENAME_INIT_ERROR, error })
    }
}

export function* ViewMenulistSaga(payload) {
    try {
        const response = yield call(CommonServices.ViewMenulist, payload.packageName);
        yield put({ type: constant.MENULIST_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.MENULIST_INIT_ERROR, error })
    }
}

export function* ViewFilterlistSaga(payload) {
    try {
        const response = yield call(CommonServices.ViewFilterlist, payload.packageName);
        yield put({ type: constant.FILTERLIST_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.FILTERLIST_INIT_ERROR, error })
    }
}

export default function* CommonSaga() {
    yield takeLatest(constant.PACKAGENAME_INIT, ViewPackagenameSaga);
    yield takeLatest(constant.MENULIST_INIT, ViewMenulistSaga);
    yield takeLatest(constant.FILTERLIST_INIT, ViewFilterlistSaga);
}