import { fork } from 'redux-saga/effects';
import DashboardSaga from "./DashboardSaga";
import CommonSaga from "./CommonSaga";
import ReportSaga from "./ReportSaga";

export default function* rootSaga(getState) {
    yield fork(DashboardSaga);
    yield fork(CommonSaga);
    yield fork(ReportSaga);
}