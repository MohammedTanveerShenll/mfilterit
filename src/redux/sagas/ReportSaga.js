import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/ReportConstants";
import ReportServices from "../services/ReportService";

export function* ViewReportSaga(payload) {
    try {
        const response = yield call(ReportServices.ViewReportlist, payload.packageName,payload.fromDate,payload.toDate,payload.country,payload.country,payload.publisher,payload.channel,payload.brand,payload.status,payload.priority,payload.category);
        console.log('resssss in saga report',response);
        yield put({ type: constant.REPORT_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.REPORT_INIT_ERROR, error })
    }
}


export default function* ReportSaga() {
    yield takeLatest(constant.REPORT_INIT, ViewReportSaga);

}