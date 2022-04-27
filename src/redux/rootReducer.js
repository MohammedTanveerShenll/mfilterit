import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import * as auth from "../app/modules/Auth/_redux/authRedux";
import { customersSlice } from "../app/modules/ECommerce/_redux/customers/customersSlice";
import { productsSlice } from "../app/modules/ECommerce/_redux/products/productsSlice";
import { remarksSlice } from "../app/modules/ECommerce/_redux/remarks/remarksSlice";
import { specificationsSlice } from "../app/modules/ECommerce/_redux/specifications/specificationsSlice";
import DashboardReducer from "./reducers/DashboardReducer";
import CommonReducer from "./reducers/CommonReducer";

export const rootReducer = combineReducers({
    auth: auth.reducer,
    customers: customersSlice.reducer,
    products: productsSlice.reducer,
    remarks: remarksSlice.reducer,
    specifications: specificationsSlice.reducer,
    dashboard: DashboardReducer,
    common: CommonReducer,
});

// export function* rootSaga() {
//     yield all([auth.saga()]);
// }
