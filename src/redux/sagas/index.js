import { fork } from 'redux-saga/effects';
import DashboardSaga from "./DashboardSaga";

export default function* rootSaga(getState) {
    yield fork(DashboardSaga);
}