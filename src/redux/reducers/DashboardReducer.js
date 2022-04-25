import * as constant from "../constants/DashboardConstants";
const initialState = {
    totalincident_list: [],
    loading: false,
    error: null,
};

const DashboardReducer = (state = initialState, { type, response }) => {
    switch (type) {
        case constant.TOTAL_INCIDENTS:
            return {
                ...state,
                loading: true,
                data: response
            };

        case constant.TOTAL_INCIDENTS_SUCCESS:
            return {
                ...state,
                loading: true,
                totalincident_list: response.data,
            };

        case constant.TOTAL_INCIDENTS_ERROR:
            return {
                ...state,
                loading: false,
                error: response,
            };
        default:
            return state;
    }
}
export default DashboardReducer
